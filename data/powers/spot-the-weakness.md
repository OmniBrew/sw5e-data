---
name: Spot the Weakness
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
      save: dex
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 30
    concentration: true
---
Up to three creatures of your choice that you can see within range must make Dexterity saving throws. The first time each turn a target that fails this saving throw makes an attack roll or a saving throw before the power ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.

***__At Higher Levels__:*** When you cast this power with a tech slot of 3rd level or higher, you can target one additional creature for every two slot levels above 1st. When you cast this power at 3rd, 6th, or 9th level, the die increases to d6, d8, and d10, respectively.
    