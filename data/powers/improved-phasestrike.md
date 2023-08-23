---
name: IMPROVED PHASESTRIKE
version: 1
level: 5
alignment: universal
prerequisite: Phasestrike
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
      type: melee
      wp: power
      proficient: True

    damage:
      - dieCount: 6
        dieType: 10
        type: force
    duration:
      length: Instantaneous
      unit: 
    range:
      short: 30
    concentration: False
---
Choose up to five creatures you can see within
range. Make a melee force attack against each one. On
hit, a target takes 6d10 force damage. You can then
teleport to an unoccupied space you can see within 5
feet of one of the creatures you chose.

    