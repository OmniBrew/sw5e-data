const fs = require('fs')
const fse = require('fs-extra')
const fm = require('front-matter')
const _ = require('lodash')
const config = require('./package.json')

// Markdown it options
const MarkdownIt = require('markdown-it')
const md = new MarkdownIt({ html: true })

md.use(require('markdown-it-container'), 'alert')
  .use(require('markdown-it-multimd-table'))

md.renderer.rules.table_open = function () {
  return '<v-simple-table class="mb-8"><template v-slot:default>'
}
md.renderer.rules.table_close = function () {
  return '</template></v-simple-table>'
}

md.renderer.rules.blockquote_open = function () {
  return '<v-card class="blockquote-card"><v-card-text>'
}
md.renderer.rules.blockquote_close = function () {
  return '</v-card-text></v-card>'
}

md.renderer.rules.container_alert_open = function () {
  return '<v-alert value type="info">';
}
md.renderer.rules.container_alert_close = function () {
  return '</v-alert>';
}

md.renderer.rules.image = function (tokens, idx, options, env, self) {
  const token = tokens[idx]
  const srcIndex = token.attrIndex('src');
  const src = token.attrs[srcIndex][1]
  return `<v-img src="${src}" />`
}

md.renderer.rules.link_close = function(tokens, idx) {
  const pToken = tokens[idx - 2]
  const href = pToken.attrs[0][1]
  if (/^\//.test(href)) {
    return `</nuxt-link>`
  } else {
    return '</a>'
  }
}

const setLinkLocalePrefix = (lang = null) => {
  md.renderer.rules.link_open = function(tokens, idx) {
    const token = tokens[idx]
    let href = token.attrs[0][1]
    if (/^\//.test(href)) {
      if (lang) {
        href = `/${lang}${href}`
      }
      return `<nuxt-link to="${href}">`
    } else {
      return `<a href="${href}" target="_blank">`
    }
  }
}

const ignore = ['messages', 'subspecies']
const staticData = ['about.json']
const staticMdData = ['guides-index.md', 'manual-index.md']
const versionDir = `./docs/v${config.version.replace(/\./g,'')}`

if (!fs.existsSync(versionDir)) {
  fs.mkdirSync(versionDir);
}

const textPath = `./text`
const dataPath = `./data`

const langs = fs.readdirSync(textPath)
const dataDirs = fs.readdirSync(dataPath)

for (const lang of langs) {
  const targetPath = `${versionDir}/${lang}`
  setLinkLocalePrefix(lang === 'en' ? null : lang)

  // create the target if it doesn't exist
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath);
  }

  // copy any staticData
  for (const f of staticData) {
    fs.copyFile( `${dataPath}/${f}`, `${targetPath}/${f}`, (err) => {
      if (err) throw err;
    });
  }

  // copy and convert any static md files
  for (const f of staticMdData) {
    const fc = fm(fs.readFileSync(`${dataPath}/${f}`, 'utf8'))
    let item = fc.attributes
    fs.writeFileSync(`${targetPath}/${f.replace('.md', '.json')}`, JSON.stringify(item, null, 2))
  }

  const textSourcePath = `${textPath}/${lang}`

  const processedModels = []

  // process data dirs
  for (const dir of dataDirs) {
    if (ignore.includes(dir) || staticData.includes(dir) || staticMdData.includes(dir)) {
      continue
    }
    // don't render the changelog in anything but english
    if (dir === 'changelog' && lang !== 'en') {
      continue
    }

    // classes, subclasses, and class features
    if (dir === 'classes') {
      const classDirs = fs.readdirSync(`${dataPath}/${dir}`)
      const classes = []
      let subclasses = []
      let classFeatures = []
      for (const klassId of classDirs) {
        // set up the class item
        const classFile = fm(fs.readFileSync(`${dataPath}/${dir}/${klassId}/_class.md`, 'utf8'))
        const item = classFile.attributes
        const body = classFile.body
        item.html = md.render(body)
        item.id = klassId
        if (item.mechanics?.length) {
          item.mechanics = appendResourceIds(item.mechanics, item.id, item.name, 'classes')
        }
        classes.push(item)
        classFeatures = classFeatures.concat(extractClassFeatures(`${dataPath}/${dir}/${klassId}`, klassId))

        const scObject = extractSubclasses(`${dataPath}/${dir}/${klassId}`, klassId)
        subclasses = subclasses.concat(scObject.items)
        classFeatures = classFeatures.concat(scObject.classFeatures)
      }
      fs.writeFileSync(`${targetPath}/classes.json`, JSON.stringify(classes, null, 2))
      fs.writeFileSync(`${targetPath}/subclasses.json`, JSON.stringify(subclasses, null, 2))
      fs.writeFileSync(`${targetPath}/class-features.json`, JSON.stringify(classFeatures, null, 2))
      continue
    }

    if (dir === 'edges') {
      const edges = []
      const edgeDirs = fs.readdirSync(`${dataPath}/${dir}`)
      for (const edgeType of edgeDirs) {
        const edgeCollection = fs.readdirSync(`${dataPath}/${dir}/${edgeType}`)
        for (const edgeFile of edgeCollection) {
          const fc = fm(fs.readFileSync(`${dataPath}/${dir}/${edgeType}/${edgeFile}`, 'utf8'))
          const item = fc.attributes
          const body = fc.body
          item.html = md.render(body)
          item.id = edgeFile.replace(/.md$/, '')
          item.type = edgeType
          if (item.mechanics?.length) {
            item.mechanics = appendResourceIds(item.mechanics, item.id, item.name, edgeType)
          }
          edges.push(item)
        }
      }
      fs.writeFileSync(`${targetPath}/edges.json`, JSON.stringify(edges, null, 2))
      continue
    }


    const modelDataPath = `${dataPath}/${dir}`
    const modelTextPath = `${textSourcePath}/${dir}`
    const modelTargetFile = `${targetPath}/${dir}.json`
    const modelFns = fs.readdirSync(modelDataPath)
    const items = []

    for (const file of modelFns) {
      let item = combineItem(file,dir, `${modelDataPath}/${file}`, `${modelTextPath}/${file}`)
      // changelog
      if (dir === 'changelog') {
        item.date = new Date(item.date)
        item.url = `/changelog/${item.slug}`
      }
      // species
      if (dir === 'species') {
        if (item.subspecies) {
          const subspecies = fm(fs.readFileSync(`${dataPath}/subspecies/${item.subspecies}.md`, 'utf8'))
          item.subspecies = {
            name: subspecies.attributes.name,
            html: md.render(subspecies.body)
          }
        } else {
          item.subspecies = false
        }
      }
      // spells
      if (dir === 'powers') {
        if (!item.version) {
          console.log('no version for: ' + item.name)
          continue
        }
        if (!item.tags) {
          console.log('no tags for: ' + item.name)
          continue
        }
      }
      items.push(item)
    }
    // edges
    if (dir === 'edges') {
      items.push(...generateExaltedLineages().sort((a, b) => a.name < b.name ? -1 : 1))
    }
    fs.writeFileSync(modelTargetFile, JSON.stringify(items, null, 2))
    processedModels.push(dir)
  }

  // compile the messages into a json file
  const messages = require(`${textSourcePath}/messages`)
  fs.writeFileSync(`${targetPath}/messages.json`, JSON.stringify(messages, null, 2))

  // process text dirs
  const textDirs = fs.readdirSync(textSourcePath)
  for (const dir of textDirs) {
    if (ignore.includes(dir) || staticData.includes(dir) || staticMdData.includes(dir) || processedModels.includes(dir)) {
      continue
    }
    const modelTextPath = `${textSourcePath}/${dir}`
    const modelTargetFile = `${targetPath}/${dir}.json`
    const modelFns = fs.readdirSync(modelTextPath)
    const items = modelFns.map(file => {
      return  combineItem(file, dir, `${modelTextPath}/${file}`)
    })
    fs.writeFileSync(modelTargetFile, JSON.stringify(items, null, 2))
  }
}

function extractClassFeatures (dir, klass, subclass) {
  const files = fs.readdirSync(dir)
  const items = []
  for (const file of files) {
    if (['_subclass.md', '_class.md'].includes(file) || !file.endsWith('.md')) {
      continue
    }
    const fc = fm(fs.readFileSync(`${dir}/${file}`, 'utf8'))
    const item = fc.attributes
    const body = fc.body
    item.html = md.render(body)
    item.klass = klass
    let idArray = [klass, file.replace(/.md$/, '')]
    if (subclass) {
      item.subclass = subclass
      idArray.splice(1, 0, subclass)
    }
    item.id = idArray.join('.')
    if (item.mechanics?.length) {
      item.mechanics = appendResourceIds(item.mechanics, item.id, item.name, 'class-features')
    }
    items.push(item)
  }
  return items
}

function extractSubclasses (dir, klass) {
  const subclassDirs = fs.readdirSync(dir).filter(i => !i.endsWith('.md'))
  const items = []
  let classFeatures = []
  for (const scDir of subclassDirs) {
    const fc = fm(fs.readFileSync(`${dir}/${scDir}/_subclass.md`, 'utf8'))
    const item = fc.attributes
    const body = fc.body
    item.html = md.render(body)
    item.klass = klass
    item.id = scDir
    if (item.mechanics?.length) {
      item.mechanics = appendResourceIds(item.mechanics, item.id, item.name, 'subclasses')
    }
    items.push(item)
    classFeatures = classFeatures.concat(extractClassFeatures(`${dir}/${scDir}`, klass, scDir))
  }
  return { items, classFeatures }
}

function combineItem(id, dir, file1, file2 = null) {
  const fc = fm(fs.readFileSync(file1, 'utf8'))
  let item = fc.attributes
  let body = fc.body
  if (file2) {
    if (fs.existsSync(file2)) {
      const tFc = fm(fs.readFileSync(file2, 'utf8'))
      const tItem = tFc.attributes
      item = _.mergeWith(item, tItem, (objValue, srcValue) => {
        if (_.isArray(objValue) && _.isObject(objValue[0]) && objValue[0].id) {
          const newArray = []
          for (let dIndex = 0; dIndex < objValue.length; dIndex++) {
            if (objValue[dIndex].id) {
              const tIndex = srcValue.findIndex(i => i.id === objValue[dIndex].id)
              if (tIndex > -1) {
                newArray.push(_.merge(objValue[dIndex], srcValue[tIndex]))
              } else {
                newArray.push(objValue[dIndex])
              }
            }
          }
          return newArray.concat(srcValue.filter(i => !newArray.map(j => j.id).includes(i.id)))
        }
      })
      body = tFc.body
    }
  }
  item.html = md.render(body)
  item.id = id.replace(/.md$/, '')
  if (item.mechanics?.length) {
    item.mechanics = appendResourceIds(item.mechanics, item.id, item.name, dir)
  }
  return item
}

function appendResourceIds (mechanics, id, name, model) {
  const newMechanics = []
  for (const m of mechanics) {
    let newM = m
    if (m.resource) {
      if (!m.resource.id) {
        newM = {
          ...m,
          resource: {
            ...m.resource,
            id
          }
        }
      }
    }
    if (['action', 'reaction', 'other', 'bonus-action', 'attack', 'global-note'].includes(m.type)) {
      newM = {
        name,
        moreInfo: {
          model: model,
          id: id
        },
        ...newM,
      }
    }
    newMechanics.push(newM)
  }
  return newMechanics
}
