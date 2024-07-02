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
const armor = require('./gear-armor.json')

for (const a of armor) {
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
        mechanics: [
        ]
    }
    const body = a.Text
    writeItem('armor', attributes, body, a.Name)
}
*/

/**
 * 
 * Armor conversion (enhanced)
 */

const armor = require('./gear-armor-regular.json')

for (const a of armor) {
    const attributes = {
        source: a.ContentSource,
        placement: _.snakeCase(a.Subtype),
        type: _.snakeCase(a.ArmorClassification),
        cost: a.Cost,
        image: null,
        tags: [],
        set: false,
        rarity: _.snakeCase(JSON.parse(a.RarityOptionsJson)[0]),
        name: a.Name,
        flavor: a.Description,
        weight: a.Weight,
        properties: JSON.parse(a.PropertiesJson).map(i => _.kebabCase(i)),
        minStr: a.StrengthRequirement || null,
        stealthDisadvantage: a.StealthDisadvantage === 'true' ? true : false,
        acString: a.AC,
        mechanics: []
    }
    const acText = a.AC
    if (acText.startsWith('+')) {
        const acValue = parseInt(acText.replaceAll(/\D/,'')) || 0
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
    const body = ''
    writeItem('armor', attributes, body, a.Name)
}



/*
fs.createReadStream('./utility/SW5eCSV/equipmenten.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results.length)
        const final = results.map(i => {
            return convertArmor(i)
        })
        // console.log(final.filter(i => i.TypesJson.length > 1).length)
        fs.writeFile('./utility/gear-reg.json', JSON.stringify(final, null, 2), () => {})
    })

*/
