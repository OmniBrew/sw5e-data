---
name: Force Suppression
version: 1
level: 3
alignment: universal
prerequisite: 
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
      length: 0
      unit: instant
    range:
      short: 120
    concentration: false
---
Choose one creature, object, or force effect within range. Any force power of 3rd level or lower on the target ends. For each force power of 4th level or higher on the target, make an ability check using your forcecasting ability. The DC equals 10 + the power's level. On a success, the power ends.

***__At Higher Levels__:*** When you cast this power using a force slot of 4th level or higher, you automatically end the effects of a force power on the target if the power's level is equal to or less than the level of the force slot you used.
    