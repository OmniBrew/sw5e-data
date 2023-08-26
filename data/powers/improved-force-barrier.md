---
name: Improved Force Barrier
version: 1
level: 5
alignment: light
prerequisite: Force Barrier
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
      unit: minute
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 2
        dieType: 10
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 30
    concentration: false
---
This power further bolsters your allies with toughness and resolve. Choose up to twelve creatures within range. Each target gains the following benefits:
- The becomes immune to poison and disease. Any currently existing poison or diseases still exist.
- The creature becomes immune to being frightened by powers.
- The creature's hit point maximum and current hit points increase by 2d10 for the duration.

These benefits last for 24 hours or until the end of your next long rest, whichever happens first.
    