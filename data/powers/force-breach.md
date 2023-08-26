---
name: Force Breach
version: 1
level: 5
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
      proficient: True
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
Choose a spot within range. All force powers of 5th level or lower in the area end. For each force power of 6th level or higher in the area, make an ability check using your forcecasting ability. The DC equals 10 + the power's level. On a successful check, the force power ends.

***__At Higher Levels__:*** When you cast this power using a force slot of 6th level or higher, you automatically end the effects of a force power on the target if the power's level is equal to or less than the level of the force slot you used.
    