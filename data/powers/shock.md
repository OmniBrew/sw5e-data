---
name: Shock
version: 1
level: 0
alignment: dark
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
      short: 120
    concentration: false
---
You hurl a bolt of lightning at a target within range, making a ranged force attack. On a hit, the target takes 1d10 lightning damage. The lightning ignites flammable objects in the area that aren't being worn or carried.

This power's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).
    