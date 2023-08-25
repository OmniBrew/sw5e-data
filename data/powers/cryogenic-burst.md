---
name: Cryogenic Burst
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
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 1
        dieType: 8
        type: cold
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
You emit a burst of cold energy at a creature within range. Make a ranged tech attack against the target. On a hit, it takes 1d8 cold damage, and gains 1 slowed level until the start of your next turn.

The power's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).
    