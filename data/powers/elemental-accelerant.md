---
name: Elemental Accelerant
version: 1
level: 4
alignment: none
prerequisite: 
type: tech
tags:
  - damage
classes:
  - tech
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: con
    damage:
      - dieCount: 2
        dieType: 6
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 90
    concentration: true
---
Choose one creature you can see and one damage type: acid, cold, fire, lightning, or sonic. The target must make a Constitution saving throw. If it fails, the first time on each turn when it takes damage of the chosen type, it takes an extra 2d6 damage of it. The target also loses resistance to the type until the power ends.

***__At Higher Levels__:*** You can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them.
    