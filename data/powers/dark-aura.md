---
name: Dark Aura
version: 1
level: 3
alignment: dark
prerequisite: Hex
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: bonusaction
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 1
        dieType: 8
        type: necrotic
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: true
---
You manifest a mantle of malevolent dark side energy for the duration.

Until the power ends, any attack you make deals an extra 1d8 necrotic damage when you hit a creature within 10 feet of you. Any creature that takes this damage can't regain hit points until the start of your next turn.

Additionally, any creature of your choice that you can see that starts its turn within 10 feet of you gains 1 slowed level until the start of your next turn.

***__At Higher Levels__:*** When you cast this power using a force slot of 5th level or higher, the extra damage increases by 1d8 for for every two slot levels above 3rd.
    