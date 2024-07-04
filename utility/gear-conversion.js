const fs = require('fs')
const _ = require('lodash')
const YAML = require('yaml')
const fm = require('front-matter')
const csv = require('csv-parser')

// const items = require('./gear-enc.json')
// const regular = require('./gear-reg.json')
// const items = [...enhanced, ...regular]

/*
Enhanced types
[
  'Weapon',
  'ItemModification',
  'CyberneticAugmentation',
  'Armor',
  'Consumable',
  'DroidCustomization',
  'AdventuringGear',
  'Focus',
  'Shield',
  'ShipArmor',
  'ShipShield',
  'ShipWeapon'
]

Regular types


/*
const items = require('./gear-reg.json')
const weapons = []
const armor = []
const remaining = []
for (const item of items) {
    switch (item.EquipmentCategory) {
        case 'Weapon':
            weapons.push(item)
            break
        case 'Armor': 
            armor.push(item)
            break
        default:
            remaining.push(item)
            break
    }
}
// fs.writeFile('./utility/gear-weapons.json', JSON.stringify(weapons, null, 2), () => {})
fs.writeFile('./utility/gear-armor-regular.json', JSON.stringify(armor, null, 2), () => {})
fs.writeFile('./utility/gear-reg-remaining.json', JSON.stringify(remaining, null, 2), () => {})
*/

function writeItem (dir, attributes, body, name) {
    let fn = _.kebabCase(name)
    let content = '---\n'
    content += YAML.stringify(attributes)
    content += `---\r\n${body}`
    fs.writeFileSync(`./data/${dir}/${fn}.md`, content)
}


/**
 * 
 * Armor conversion (enhanced)
 */
/*
const armorEnc = require('./gear-armor.json')

for (const a of armorEnc) {
    const attributes = {
        source: a.ContentSource,
        placement: _.snakeCase(a.Subtype),
        type: _.snakeCase(a.EnhancedArmorType),
        cost: null,
        image: null,
        tags: [],
        set: false,
        rarity: _.snakeCase(JSON.parse(a.RarityOptionsJson)[0]),
        name: a.Name,
        flavor: null,
        properites: [],
        minStr: null,
        stealthDisadvantage: false,
        acString: '',
        mechanics: [
        ]
    }
    const body = a.Text
    writeItem('armor', attributes, body, a.Name)
}
*/
/**
 * 
 * Armor conversion (regular)
 */
/*
const armorReg = require('./gear-armor-regular.json')

for (const a of armorReg) {
    const attributes = {
        source: a.ContentSource,
        placement: _.snakeCase(a.Subtype),
        type: _.snakeCase(a.ArmorClassification),
        cost: parseInt(a.Cost),
        image: null,
        tags: [],
        set: false,
        rarity: 'unenhanced',
        name: a.Name,
        flavor: null,
        weight: parseInt(a.Weight),
        properties: [],
        minStr: a.StrengthRequirement || null,
        stealthDisadvantage: a.StealthDisadvantage === 'true' ? true : false,
        acString: a.AC,
        mechanics: []
    }
    if (a.PropertiesJson) {
        try {
            const props = JSON.parse(a.PropertiesJson).map(i => _.kebabCase(i))
            attributes.properties = props
            allProps.push(...props)
        } catch (e) {

        }
    }
    const acText = a.AC
    if (acText.startsWith('+')) {
        const acValue = parseInt(acText.replaceAll(/\D/g,'')) || 0
        mechanic = {
            type: 'ac',
            bonus: {
                type: 'flat',
                value: acValue
            }
        }
        attributes.mechanics.push(mechanic)
    } else {
        const [acValue, junk] = (a.AC || '').split('+')
        if (acValue) {
            mechanic = {
                type: 'ac-set',
                value: parseInt(acValue.trim()) || 0
            }
            attributes.mechanics.push(mechanic)
        }
    }
    const body = a.Description
    // writeItem('armor', attributes, body, a.Name)
}
    */

/**
 * 
 * Armor properties
 */
/*
const props = require('./gear-armorProps.json')
for (const aprop of props) {
    const attributes = {
        is_new: true,
        name: aprop.Name
    }
    contentSplit = aprop.Content.split('\r\n')
    const body = contentSplit.slice(1).join('\r\n')
    writeItem('armor-properties', attributes, body, aprop.Name)
}
*/

/*
let results = []
fs.createReadStream('./utility/SW5eCSV/armorPropertiesen.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        // console.log(final.filter(i => i.TypesJson.length > 1).length)
        fs.writeFile('./utility/gear-armorProps.json', JSON.stringify(results, null, 2), () => {})
    })
*/