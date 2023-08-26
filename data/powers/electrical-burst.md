---
name: Electrical Burst
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

    dc:
      save: dex
    damage:
      - dieCount: 1
        dieType: 6
        type: lightning
    duration:
      length: 0
      unit: instant
    range:
      short: Self
    concentration: false
---
You emit a burst of electricity. Each creature within range, other than you, must succeed on a Dexterity saving throw or take 1d6 lightning damage.

This power's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).
    