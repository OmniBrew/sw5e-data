---
name: Force Shunt
version: 1
level: 0
alignment: universal
prerequisite: 
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: str
    damage:
      - dieCount: 1
        dieType: 4
        type: kinetic
    duration:
      length: 0
      unit: instant
    range:
      short: 30
    concentration: false
---
You use the Force to thrust a creature you can see to the ground. The target must make a Strength saving throw. On a failed save, a creature takes 1d4 kinetic damage and falls prone. 

This power's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).
    