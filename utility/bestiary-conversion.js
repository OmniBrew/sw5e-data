const fs = require('fs')
const _ = require('lodash')
const YAML = require('yaml')
const fm = require('front-matter')
const csv = require('csv-parser')

const results = []


function convertBestiaryItem(item) {
    for (const key of Object.keys(item)) {
        // console.log(key)
        if (key.endsWith('Json') && item[key]) {
            try {
                if (key === 'TypesJson') {
                    let type = JSON.parse(item[key])[0] 
                    if (type.startsWith('H') || type.endsWith('Villainous')) {
                        type = 'humanoid'
                    }
                    item[key] = type
                } else {
                    item[key] = JSON.parse(item[key])
                }
            } catch(e) {
                console.log(`${item.RowKey} failed`)
                continue
            }
        }
    }
    const fileName = _.kebabCase(item.RowKey) + '.md'
    const frontMatter = {
        name: item.RowKey,
        image: null,
        type: item.TypesJson[0],
        unit: null,
        size: item.Size.toLowerCase(),
        alignment: _.snakeCase(item.Alignment)
    }
    item.id = _.kebabCase(item.RowKey)
    // alignment
    return item
}

fs.createReadStream('./utility/SW5eCSV/monstersen.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        // console.log(results.length)
        const final = results.map(i => {
            return convertBestiaryItem(i)
        })
        console.log(final.filter(i => i.TypesJson.length > 1).length)
        fs.writeFile('./data/bestiary.json', JSON.stringify(final, null, 2), () => {})
    })


