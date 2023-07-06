---
#############################################################################
# New mechanics that need to be developed for SW5e
#########

## bonus powercasting resources (see consular forcecasting and consular bendu forcecasting affinity
- type: bonus-pc-resource
  value: @bonus

## Need to investigate things like proficiency in instruments and/or games...i don't think ME does profs in specific ones

## Effect: type = null may not work for individual skills (see bith programmer)

## add language as an option for profs

#############################################################################
# Refs (i.e., reusable schema)
# For example, if you see @resource or @bonus you should reference the resource schema in this section
#########

resource:
  displayType: enum [heat, counter, checkbox, hit-dice, omni-gel, barrier-ticks, gear-consumable] # default checkbox
  reset: enum [short, long, manual, off, cast] # 'manual' will display a "reload" button, default long, "off" will have no toggles
  resetTo: enum [min, max] #optional, default min
  max: @bonus
  increment: integer # default 1, for when a single click uses 2
  id: string # a uuid to track the resources. Allows for sharing resources
  label: string #default is '/ [short or long] rest'

toggle:
  id: string # toggleable id
  options:
    - id: string
      name: string
      whenOn: [whenable]
      whenOff: [whenable]
  whenOn: [whenable]
  whenOff: [whenable]

note:
  type: enum (text, html, tooltip, icon)
  icon: enum (mdi-icons) # icon only
  text: string
  tooltipText: string # tooltip only
  color: string (vuetify colors) # icon only

whenable:
  type: string, resource or a mechanic type
  # if resource
  id: string, resource-id
  method: enum, set, add, remove
  value: @bonus
  # or any other mechanic type

bonus:
  type: enum [flat, mod, proficiency, level, hp, progressive, progressionColumn, modComparison, dice]
  value: any
    # flat = integer
    # mod = string (abilities)
    # proficiency = null
    # level = null (for all levels), or string (klass-id) for klass levels
    # hp = max, current # TODO
    # progressive = object { [level]: value }
    # modComparison = array of abilities
    # dice = object { dieCount: @bonus, dieType: @bonus }
    # powercastingMod = string, klass-id
    # resource = string, resource-id
    # multi = array of bonus
    # barrierDieCount = null
    # barrierDieType = null
    # barrierTicks = max, current
    # shields = max, current
  multiplier: float
  min: integer # default 0
  round: up or down, default down

dieBonus:
  dieType: enum die types
  dieCount: integer

effect:
  type: enum [advantage, disadvantage, bonus, limited, die-bonus] #other is generic effect, usually just a note, parsed individually by the component that consumes it
  bonus: @bonus
  resource: @resource # for limited, can disable when uses are out
  note: string

attackLimit:
  type: [melee,ranged]
  model: [weapon, power]
  modelTypes: [enum powerTypes, weaponTypes]
  special: twf, bf, dt

damage:
  dieCount: integer or @bonus
  dieType: integer or @bonus
  mod: enum [str, dex, con, int, wis, cha, max] # optional
  type: enum [damage types] or hp, sp, tempHp
  bonus: @bonus

valueLookup:
  model: string
  id: string
  limit: enum of types


#############################################################################
# Important Notes
#########

# any mechanic that needs a selection should have
#   options: true

# any mechanic can have progressionColumn as an attribute
progressionColumn:
  label: string
  values: array
  order: int
# column orders are
# 0 = level, then prof bonus
# 1-4 = custom before features
# 5 = features
# 6-9 = custom before barrier
# 10 = barrier
# 11-14 = custom before cantrips
# 15 = cantrips
# 16-19 = custom before powercasting
# 20 = point, then pact, then slot


#############################################################################
# Mechanics
#########

mechanics:
##########################
#
# Ability score manipulation
#
  - type: asi
    ability: int
    amount: 1
  - type: asi-choice
    options: true
    limit: enum [abilities]
    selections: integer # default 1
    total: integer # default 1
    max: integer #default 1, max 2
  - type: asi-minimum
    ability: enum abilities
    minimum: int

##########################
#
# Proficiencies
#
  - type: enum [skill, weapon, armor, saving-throw, tool, expertise] #note that 'saving-throw' has a double meaning. Could be rectified by adding -prof to the end of these
    value: enum [types of that prof]
    expertise: boolean
  - type: # [prof]-choice
    options: true
    limit: [types] #optional array
    selections: integer
    expertise: boolean
  - type: skill-or-expertise
    value: [@skills]

##########################
#
# AC
#
  - type: ac
    bonus: @bonus
  - type: natural-armor
    base: integer
    mod: enum [abilities]

##########################
#
# HP
#
  - type: hp
    bonus: @bonus

##########################
#
# Immunities, resistances, and vulnerabilities
#
  #resistances
  - type: resistance
    label: string
    value: enum of damage types or null if using label
    note: string #optional, appends to damage type as a caveat or used to display text for special damage types
  # condition immunities
  - type: condition-immunity
    value: enum or false #false used when the type is "special" for oddballs like "falling damage"
    note: string #optional, appends to damage type as a caveat or used to display text for special damage types

##########################
#
# Saving Throws
#
  - type: saving-throw
    against: array
    value: enum [abilities]
    valueLookup: @valueLookup
    effect: @effect

##########################
#
# Initiative
#
  - type: initiative
    effect: @effect

##########################
#
# Skill check augments
#
  - type: skill-check
    value: enum [skills]
    valueLookup: @valueLookup
    effect: @effect

##########################
#
# Passive Skills
#
  - type: passive
    value: enum @skills
    bonus: @bonus

##########################
#
# Speeds
#
  - type: speed
    speed: enum [walk, fly, burrow, swim, climb]
    distance: integer
    note: string #note is optional.
  - type: speed-bonus
    value: [enum speeds]
    bonus: @bonus
  - type: speed-note
    note: string

##########################
#
# Senses
#
  - type: sense
    sense: enum [senses]
    distance: integer
    note: string

##########################
#
# Custom Attacks
#
  - type: natural-weapon
    replacesUnarmedStrike: boolean
    value:
      noMod: boolean # see tentacles, damage doesn't add str
      type: enum [natural-melee,natural-ranged]
      damage: @damage
      notes: array of strings
      properties: [enum [weapon properties]]
      moreInfo:
        model: string
        id: string
  - type: gun-strike-augment
    value:
      damage: @damage
      notes: array of strings

##########################
#
# Actions, Bonus actions, Reactions, and "Other"
#
  - type: enum [action, bonus-action, reaction, other] # simply indicates where to render on the character sheet
    resource: @resource #optional, default null
    name: string # custom name
    toggle: @toggle
    range:
      short: integer (0 = self, touch = 1)
      long: integer (0 = self, touch = 1)
      note: string
      aoe:
        type: enum [aoe types]
        size: integer
    attack: # optional, renders attack attributes
      type: enum [melee, ranged]
      proficient: boolean # optional, whether or not to add the proficiency bonus to attack, damage, etc
      mod: enum [str, dex, con, int, wis, cha] # optional
      bonus: @bonus
      note: string
    damage:
      - dieCount: integer (0 = special)
        dieType: integer
        mod: enum [str, dex, con, int, wis, cha, max] # optional
        modComparison: enum [abilities] #required for max mod
        type: enum [damage types] or hp, sp, tempHp
        bonus: @bonus
    dc:
      base: integer # default = true
      proficient: boolean # default = true
      mod: enum [str, dex, con, int, wis, cha] # optional
      bonus: @bonus
      save: enum [str, dex, con, int, wis, cha]
      note: string
    notes:
      - string # optional, appends to damage type as a caveat or used to display text for special damage types
    shortDesc: string # optional, gets it's own object
    baseGroup: boolean (adds the string to the base group), i.e. actions > use an object, dash, etc
    moreInfo: # can also be false to override
      component: string
      bind: object
      model: string
      id: string

##########################
#
# Selections/Model Choice, for example "Choose 2 powers from this list..." or "Choose a fighting style..."
#
  - type: model-choice
    options: true
    label: string
    model: string
    selections: int
    limits:
      - attr: string
        value: []
    append: any

##########################
#
# Spellcasting
#
  # slots
  - type: powercasting-slots
    multiclassConversion: float (default 1)
    known: array or false
    prepared:
      levelMultiplier: float
      modBonus: boolean
    slots:
      1: array
      2: array
      3: array
      4: array
      5: array
    mod: enum @abilities
  # points
  - type: powercasting-points
    multiclassConversion: float (default 1)
    known: array or false
    prepared:
      levelMultiplier: float
      modBonus: boolean
    points: array
    limit: array
    mod: enum @abilities
  # pact
  - type: powercasting-pact
    multiclassConversion: float (default 1)
    known: array or false
    prepared:
      levelMultiplier: float
      modBonus: boolean
    slotLevel: array
    numSlots: array
    mod: enum @abilities

##########################
#
# Cantrips
#
  - type: cantrips
    columnName: string (default Cantrips)
    known: array
  - type: additional-cantrips
    bonus: @bonus

##########################
#
# Extra Attack
#
  # regular
  - type: extra-attack
    value: int
  # additive
  - type: extra-attack-add # adds 1 to the extra attack total

##########################
#
# Spellcasting resource recovery
#
  - type: power-resource-recovery
    dieCount: int
    dieType: int
    bonus: @bonus
    limit: enum [points, slots]
    label: string
    maxSlot: int

##########################
#
# Global Note
#
  - type: global-note
    subType: enum [power, action, defenses]
    attack: enum [melee, ranged]
    value: string
    moreInfo:
      model: string
      id: string


#############################################################################
# Unique or rare mechanics
#########

## Minimum hit die roll
  - type: min-hit-die-roll
    bonus: @bonus

## Regain all hit dice on a long rest
  - type: regain-all-hit-dice

## Cantrip boost (see asari initiate armor)
  - type: cantrip-boost

#############################################################################
# Really complex mechanics
#########
##########################
#
# Attack and Damage bonuses
# e.g., gain +1 to all weapon attacks
#
  - type: attack-augment
    attackLimit: @attackLimit
    augmentTypes: [enum damage, dc, hit, range, notes]
    bonus: @bonus
    abilityMod: boolean #damageOnly
    dieIncrease: int #damageOnly
    rerollIfLessThan: int #damageOnly
    crit: int # hit only
    addCritDie: int # damage only
    notes: [@note]
##########################
#
# Augment an existing mechanic
# i.e., "Your XYZ feature gains this other benefit at this level"
#
  - type: augment
    value: # or value lookup
      model: enum
      id: string
      limit: [enum types]
      instances: 0
    merge:
      @type


#############################################################################
# Potentially Mass Effect only mechanics
#########
## weapon props (weapon mod only)
  - type: adjust-weapon-props
    add: [enum weapon properties]
    remove: [enum weapon properties]

## ammo powers (weapon mod only)
  - type: weapon-augment
    hitBonus: int
    damageType: string
    primes: string
    primeLength: string # optional
    detonates: boolean
    addDamage: @damage
    notes: [@note]
    heatConsumption: string
    damageMultiplier: boolean
    onlyShortRange: boolean
    dc: @dc (removes weapon attack)
    toggle: boolean # is toggleable or not
    name: string #required if toggle
    shortRangeMax: int
    longRangeMax: int
    shortRangeMultiplier: int
    longRangeMultiplier: int

## weapon range maximum (weapon mod only)
  - type: weapon-range-maximum
    shortRange: int
    longRange: int

## Barrier
  - type: barrier
    multiclassConversion: float (default 1)
    ticks: array
    uses: array
    dieType: int
    dieCount: int

# Shields
  - type: shields
    capacity: @bonus
    regen: @bonus
    additive: boolean

# Armor Capacities
  - type: grenade-capacity
    value: int
  - type: thermal-clip-capacity
    value: int
  - type: medi-gel-capacity
    value: int
  - type: weapon-slots
    value: int

# Weapon heat adjustments (mods only)
  - type: weapon-heat-increase
    multiplier: float
    value: int



#############################################################################
# Not implemented/Ides
#########
- type: dual-wielder # +1 ac if 2 melee equipped, twf with non-light
  value: @bonus || array (for notes) || abilityMod

- type: featherlight

- type: melee-gunner #twf w/ two-handed weapon if other is gun strike and other is omni-tool?

- type: nullify-armor-str-restriction # Do not check for STR requirements of armor (to reduce speed by 10)

- type: medium-armor-master # seems worthless cause in me5e medium armor

- type: prof-choice # need to retrofit or add this, for combined choices like fast learner and skilled

- type: imprinted-enemies # can be model choice

- type: advanced-medigel-application #d6 for medigel

- type: ignore-armor-proficiency # see hyper guardian chestplate, n7 armor, requires additional mechanics on character sheet to impose disadvantage

- type: gradient-condition-increase # could be exhaustion or indoctrination, see initiative helmet/life support webbing
  condition: enum [exhaustion, indoctrination]
  value: int

- type: ??? # some way to "auto-upgrade" a selection at a certain level (see tracker affinity)

- short/long rest note # could be a new type on global note

- type: companion
  options:
    - @companion

- type: conditional-attack-bonus # displays an icon with a list of all conditional attack bonuses (potentially armor piercing, might be others)

- type: conditional-damage-bonus # displays an icon with a list of all conditional damage bonus options
---
