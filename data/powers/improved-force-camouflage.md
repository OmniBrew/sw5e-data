---
name: Improved Force Camouflage
version: 1
level: 4
alignment: universal
prerequisite: Force Camouflage
type: force
tags:
  - damage
classes:
  - force
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
      length: 1
      unit: minute
    range:
      short: Touch
    concentration: true
---
A willing creature you touch becomes invisible until the power ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. 
    