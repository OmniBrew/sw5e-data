---
name: Minor Defibrillation
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
        dieType: 10
        type: lightning
    duration:
      length: 0
      unit: instant
    range:
      short: Touch
    concentration: false
---
You generate a static charge that can aid or harm a creature you touch. Make a melee tech attack against the target. On a hit, the target takes 1d10 lightning damage. If the target is a living creature that has 0 hit points, it immediately gains one death saving throw success instead of taking damage.

This power's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).
    