const abilities = require('./abilities')
const aboutpage = require('./aboutpage')
const assetspage = require('./assetspage')
const damage_types = require('./damage-types')
const homepage = require('./homepage')
const lists = require('./lists')
const measurements = require('./measurements')
const meta = require('./meta')
const misc = require('./misc')
const npc = require('./npc')
const senses = require ('./senses')
const sizes = require('./sizes')
const speeds = require('./speeds')
const tags = require('./tags')
const times = require('./times')
const character = require('./character')

module.exports = {
    abilities,
    abi_feature: {
        at_level: `When you reach {level}, | When you reach {level}, and again at {and_list} level,`,
        text: `{at_level} you can increase one ability score of your choice 
                by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an 
                ability score above 20 using this feature.`,
        feat_text: 'Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.'
    },
    ability_bonus_all: '+1 to all ability scores',
    ability_score_increase_title: 'Ability Score Increase',
    about_title: 'About',
    aboutpage,
    advancement_options_title: 'Advancement Options',
    age_title: 'Age',
    alignment_title: 'Alignment',
    alignments: {
        lg: 'lawful good',
        ln: 'lawful neutral',
        le: 'lawful evil',
        ng: 'neutral good',
        nn: 'neutral',
        ne: 'neutral evil',
        cg: 'chaotic good',
        cn: 'chaotic neutral',
        ce: 'chaotic evil',
        u: 'unaligned',
        tracker: 'same as the Tracker'
    },
    aoe_types: {
      sphere: 'sphere',
      cone: 'cone',
      cylinder: 'cylinder',
      cube: 'cube',
      line: 'line'
    },
    appendix_title: 'Appendix',
    ac_title: 'Armor Class',
    ac_abbr: 'AC',
    armor: 'armor | armor',
    armor_item_subtitle: '{rarity} {armorType}, {placement}',
    armor_placements: {
        head: 'head',
        head_title: 'Head',
        chest: 'chest',
        chest_title: 'Chest',
        body_armor: 'body armor (chest, legs, and arms)',
        body_armor_title: 'Body Armor',
        legs_title: 'Legs',
        legs: 'legs',
        arms: 'arms',
        arms_title: 'Arms'
    },
    armor_placement_title: 'Placement',
    armor_title: 'Armor | Armor',
    armor_type_title: 'Armor Type',
    armor_types: {
        // type only
        heavy: 'Heavy',
        light: 'Light',
        medium: 'Medium',
        // full
        heavy_armor: 'heavy armor',
        light_armor: 'light armor',
        medium_armor: 'medium armor',
        heavy_armor_title: 'Heavy Armor',
        light_armor_title: 'Light Armor',
        medium_armor_title: 'Medium Armor'
    },
    assets_title: 'Assets',
    assetspage,
    attack_title: 'Attack',
    attack_type_title: 'Attack Type',
    attack_types: {
        melee: 'Melee Attack',
        ranged: 'Ranged Attack',
        melee_weapon: 'Melee Weapon Attack',
        ranged_weapon: 'Ranged Weapon Attack',
        melee_power: 'Melee Power Attack',
        ranged_power: 'Ranged Power Attack',
    },
    background_title: 'Background | Backgrounds',
    background_intro: [
        `The sample backgrounds presented here provide both concrete benefits (features, proficiencies, and languages) and
            roleplaying suggestions.`
    ],
    bestiary_title: 'Bestiary | Bestiary',
    bookmarks_title: 'Bookmarks',
    bonus_formulas: {
      plus: '+{bonus}',
      minus: '-{bonus}'
    },
    buttons: {
        add_bookmark: 'Bookmark',
        back_to_changelog: 'Back To Changelog',
        bug: 'Report Bug',
        change_species: 'Switch Species',
        close: 'Close',
        enter_search: 'Enter a search term',
        filter: 'Filter',
        go_to: 'Jump To',
        join_community: 'Join the Community',
        no_results: 'No results found',
        read_more: 'Read More',
        remove_bookmark: 'Remove Bookmark',
        search: 'Search',
        view: 'View',
        view_details: 'View Details Page',
        view_rules: 'View Rules'
    },
    cantrip: 'cantrip',
    character,
    casting_time_title: 'Casting Time',
    change: 'change',
    changelog_title: 'Changelog',
    conditions_title: 'Conditions',
    character_builder_title: 'Character Builder',
    character_title: 'Character | Characters',
    class_title: 'Class | Classes',
    class_feature_columns: {
        barrier_ticks: 'Barrier Ticks',
        barrier_uses: 'Barrier Uses',
        cantrips: 'Cantrips',
        combat_powers: 'Combat Powers',
        features: 'Features',
        power_level: 'Power Level',
        power_slots_by_power_level: 'Power Slots by Power Level',
        power_slots: 'Power Slots',
        powers_known: 'Powers Known',
        prof_bonus: 'Proficiency Bonus',
        sneak_attack_damage: 'Sneak Attack Damage',
        tactical_cloak_uses: 'Tactical Cloak Uses',
        tech_points: 'Tech Points',
        tech_point_limit: 'Tech Point Limit',
    },
    class_features_title: 'Class Features',
    concentration_abbr: 'C',
    concentration_title: 'Concentration',
    concentration_text: 'Concentration, up to {time}',
    cost_title: 'Cost',
    cr_title: 'CR',
    credits: 'no credits | credit | {n} credits',
    damage: 'damage',
    damage_title: 'Damage',
    damage_effect_title: 'Damage/Effect',
    damage_types,
    detonates_title: 'Detonates',
    dice: `{dieCount}d{dieType}`,
    dice_average: '{avg} ({formula})',
    dice_formulas: {
        plus: '{dice} + {n}',
        minus: '{dice} - {n}',
        base: '{dice}'
    },
    digit_separator: ',',
    duration_title: 'Duration',
    equipment_title: 'Equipment | Equipment',
    faction_title: 'Faction',
    feat_title: 'Feat | Feats',
    feat_intro: [
        `A feat represents a talent or an area of expertise that gives a character special capabilities. It embodies
            training, experience, and abilities beyond what a class provides. Star Wars 5e uses a number of feats in the
            Player's Manual, providing page numbers for reference.`,
        `At certain levels, your class gives you the Ability Score Improvement feature. Using the optional feats rule, you
            can forgo taking that feature to take a feat of your choice instead. You can take each feat only once, unless
            the feat’s description says otherwise.`,
        `You must meet any prerequisite specified in a feat to take that feat. If you ever lose a feat’s prerequisite,
            you can’t use that feat until you regain the prerequisite.`
    ],
    for_title: 'For',
    galaxies: {
        andromeda: 'Andromeda',
        milky_way: 'Milky Way'
    },
    gear: 'gear',
    gear_title: 'Gear | Gear',
    gear_types: {
        ammo: 'Ammo',
        artisan: 'Artisan',
        device: 'Device',
        gaming_set: 'Gaming Set',
        grenade: 'Grenade',
        heavy_weapon: 'Heavy Weapon',
        instrument: 'Instrument',
        medi_gel: 'Medi-gel',
        omni_gel: 'Omni-gel',
        omni_tool_program: 'Omni-tool Program',
        shield: 'Shield',
        tool: 'Tool'
    },
    generators_title: 'Generators',
    guide: {
        title: 'Guides',
        creating_armor: 'Creating Armor',
        creating_encounters: 'Creating Encounters',
        creating_vehicles: 'Creating Vehicles',
    },
    grenade_name_w_mark: `{name} {mark}`,
    heat_title: 'reload',
    hit_dice_title: 'Hit Dice',
    hit_dice_per_level: '{hitDice} per level',
    hit_points_title: 'Hit Points',
    hit_points_at_first_title: 'Hit Points at 1st Level',
    hit_points_at_first_text: '{die} + {mod} modifier',
    hit_points_at_higher_title: 'Hit Points at higher levels',
    hit_points_at_higher_text: '{die} (or {min}) + {mod} modifier',
    homepage,
    level: 'level',
    level_title: 'Level | Levels',
    level_nth: '{nth} level',
    level_adj: '{nth}-level',
    license_title: 'License',
    lists,
    loot_generator_title: 'Loot Generator',
    manual: {
        title: 'Player\'s Manual',
        about_bestiary: 'About the Bestiary',
        beyond_first_level: 'Beyond 1st Level',
        combat: 'Combat',
        character_builder: 'Character Builder',
        character_creation: 'Step-By-Step Characters',
        equipment: 'Equipment',
        finances: 'Finances',
        intro: 'Introduction',
        missions: 'Missions',
        powercasting: 'Powercasting',
        using_ability_scores: 'Using Ability Scores',
        vehicles: 'Vehicles'
    },
    markdown_label: '{label}:',
    marks: {
        'i': 'I',
        'ii': 'II',
        'iii': 'III',
        'iv': 'IV',
        'v': 'V',
        'vi': 'VI',
        'vii': 'VII',
        'viii': 'VIII',
        'ix': 'IX',
        'x': 'X'
    },
    measurements,
    meta,
    military: 'military',
    misc,
    mod_availability_title: 'Availability',
    mod_availabilities: {
      all_armor: 'All armor',
      all_ranged: 'All ranged',
      all_melee: 'All melee'
    },
    mod_item_subtitle: '{rarity} {modType}',
    mod_page_title: 'Armor & Weapon Mods',
    mod_placement_title: 'Placement',
    mod_placements: {
        ammo: 'Ammo',
        arms: 'Arms',
        barrel: 'Barrel',
        body: 'Body',
        chest: 'Chest',
        grip: 'Grip',
        head: 'Head',
        legs: 'Legs',
        magazine: 'Magazine',
        strike: 'Strike'
    },
    mod_title: 'Mod | Mods',
    mod_types: {
        armor: 'Armor Mod',
        weapon: 'Weapon Mod'
    },
    name_title: 'Name',
    new: 'new',
    new_title: 'New',
    none: 'None',
    notes_title: 'Notes',
    npc,
    npc_title: 'Npc | Npcs',
    npc_generator_title: 'NPC Generator',
    ordinal_numbers: ['0', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
        '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th'],
    number_range: '{0}-{1}',
    passive_perception_title: 'Passive Perception',
    phb: 'PHB',
    point: 'no points | {n} point | {n} points',
    power_title: 'Power | Powers',
    power_types: {
        biotic: 'Biotic',
        tech: 'Tech',
        combat: 'Combat'
    },
    prerequisite_title: 'Prerequisite',
    primary_ability_title: 'Primary Ability',
    primes_detonates_title: 'Primes/Detonates',
    primes_text: 'Primes ({type})',
    proficiencies_title: 'Proficiencies',
    progression_table_title: 'Progression Table',
    random_height_weight_title: 'Random Height & Weight',
    random_hw_titles: {
        calc_height_title: 'Calculating Random Height',
        calc_height: 'Base Height + Height Modifier Roll',
        calc_weight_title: 'Calculating Random Weight',
        calc_weight: 'Base Weight + (Height Modifier Roll x Weight Modifier Roll)',
        base_height: 'Base Height',
        base_weight: 'Base Weight',
        height_mod: 'Height Modifier',
        weight_mod: 'Weight Modifier',
        length: 'Length'
    },
    range_title: 'Range',
    range_area_title: 'Range (Area)',
    "rarities": {
      "varies": "Common",
      "varies": "Varies",
      "common": "Standard",
      "uncommon": "Premium",
      "rare": "Prototype",
      "very_rare": "Legendary",
      "spectre": "Artifact"
    },
    rarity_title: 'Rarity',
    regen: 'regen',
    rules_title: 'Rules',
    saving_throws_title: 'Saving Throws',
    saves_title: 'Saves',
    save_text: '{type} Save',
    search: 'Search',
    self_title: 'Self',
    senses_title: 'Senses',
    senses,
    set_bonus: 'Set Bonus',
    set_bonus_range: `({min} of {max}):`,
    settings: {
        label: 'Settings',
        dark: 'Dark',
        light: 'Light',
        imperial: 'Imperial',
        metric: 'Metric',
        units: 'Units',
        mode: 'Mode',
        language: 'Language'
    },
    shields_title: 'Shields',
    shield: 'no shields | 1 shield | {n} shields',
    size_title: 'Size',
    sizes,
    skills_title: 'Skills',
    slot: 'no slots | {n} slot | {n} slots',
    source_title: 'Source',
    sources: {
        phb: {
            title: 'Player\'s Handbook',
            abbr: 'PHB'
        },
        ec: {
            title: 'Extended Content',
            abbr: 'EC'
        }
    },
    species_title: 'Species | Species',
    speed_title: 'Speed',
    speed_trait: 'Your base {type} speed is {distance}.',
    speeds,
    starting_credits: 'Starting Credits',
    starting_equipment_title: 'Starting Equipment',
    starting_equipment_info: 'You start with the following equipment, in addition to the equipment granted by your background:',
    string_numbers: ['zero','one','two','three','four','five','six','seven','eight','nine','ten'],
    subclass_title: 'Subclass | Subclasses',
    subclass_feature_titles: {
        adept: 'Subclass Feature',
        engineer: 'Subclass Feature',
        infiltrator: 'Subclass Feature',
        sentinel: 'Subclass Feature',
        soldier: 'Subclass Feature',
        tracker: 'Subclass Feature',
        vanguard: 'Subclass Feature',
    },
    tags_title: 'Tags',
    tags,
    times,
    title: 'Star Wars 5e',
    tool_prof_types: {
        artisan: 'Artisan',
        starship: 'Starship',
    },
    tool_profs_title: 'Tool Proficiencies',
    tools_guides_title: 'Tools & Guides',
    touch_title: 'Touch',
    traits_title: 'Traits',
    type_title: 'Type',
    type_level_title: 'Type/Level',
    variants_title: 'Variants',
    varies: 'varies',
    varies_title: 'Varies',
    vehicle_title: 'Vehicle | Vehicles',
    vehicle_types: {
        starship: 'Starship',
        transport: 'Transport'
    },
    version: 'VERSION',
    weapon: 'weapon',
    weapon_item_subtitle: '{rarity} {weaponType}',
    weapon_title: 'Weapon | Weapons',
    weapon_types: {
        simple_blaster: 'Simple Blaster | Simple Blasters',
        martial_blaster: 'Martial Blaster | Martial Blasters',
        simple_lightweapon: 'Simple Lightweapon | Simple Lightweapons',
        martial_lightweapon: 'Martial Lightweapon | Martial Lightweapons',
        simple_vibroweapon: 'Simple Vibroweapon | Simple Vibroweapons',
        martial_vibroweapon: 'Martial Vibroweapon | Martial Vibroweapons'
    },
    weapon_props_title: 'Weapon Properties',
    weight_title: 'Weight',
    xp_title: 'XP'
}
