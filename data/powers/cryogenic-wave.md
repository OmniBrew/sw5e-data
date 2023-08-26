---
name: Cryogenic Wave
version: 1
level: 1
alignment: none
prerequisite: 
type: tech
tags:
  - damage
classes:
  - engineer
  - operative
  - scout
  - shield
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: con
    damage:
      - dieCount: 2
        dieType: 6
        type: cold
    duration:
      length: 0
      unit: instant
    range:
      short: self
    concentration: false
---
A wave of cold energy spreads out from you. Each creature in a 15-foot cone must make a Constitution saving throw. On a failed save, a creature takes 2d6 cold damage and gains 1 slowed level until the end of its next turn. On a success, it takes half as much damage, and suffers no additional effect.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st. At 3rd level or above, a creature gains 2 slowed levels on a failed save. At 5th level or above, a creature gains 3 slowed levels on a failed save. At 7th level or above, a creature gains 4 slowed levels on a failed save.
    