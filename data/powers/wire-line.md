---
name: Wire Line
version: 1
level: 0
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
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 1
        dieType: 6
        type: kinetic
    duration:
      length: 0
      unit: instant
    range:
      short: 30
    concentration: false
---
You launch a grappling wire toward a creature you can see within range. Make a melee tech attack against the target. If the attack hits, the creature takes 1d6 kinetic damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you.

This power's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).
    