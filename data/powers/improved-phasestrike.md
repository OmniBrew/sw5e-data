---
name: Improved Phasestrike
version: 1
level: 5
alignment: universal
prerequisite: phasestrike
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
      - dieCount: 6
        dieType: 10
        type: force
    duration:
      length: 0
      unit: instant
    range:
      short: 30
    concentration: false
---
Choose up to five creatures you can see within range. Make a melee force attack against each one. On hit, a target takes 6d10 force damage. You can then teleport to an unoccupied space you can see within 5 feet of one of the creatures you chose.
    