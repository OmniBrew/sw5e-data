---
name: Pressure Crush
version: 1
level: 0
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
      save: str
    damage:
      - dieCount: 1
        dieType: 12
        type: kinetic
    duration:
      length: 0
      unit: instant
    range:
      short: Touch
    concentration: false
---
You attempt to crush the body of a creature you touch. The target must make a Strength saving throw. If the creature is grappled or restrained by you or an effect you control, it makes the saving throw with disadvantage. On a failed save, the creature takes 1d12 kinetic damage.

This power's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).
    