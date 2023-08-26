---
name: Improved Force Camouflage
version: 1
level: 4
alignment: universal
prerequisite: force camouflage
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
      short: touch
    concentration: true
---
A willing creature you touch becomes invisible until the power ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. 
    