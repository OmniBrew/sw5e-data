---
name: Valor
version: 1
level: 1
alignment: light
prerequisite: resistance
type: force
tags:
  - damage
classes:
  - consular
  - guardian
  - sentinel
  - adept
  - beguiler
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
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
You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the power ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.

***__At Higher Levels__:*** When you cast this power with a force slot of 3rd level or higher, you can target one additional creature for every two slot levels above 1st. When you cast this power at 3rd, 6th, or 9th level, the die increases to d6, d8, and d10, respectively.
    