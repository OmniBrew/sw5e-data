---
name: Burst
version: 1
level: 0
alignment: universal
prerequisite: 
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

    dc:
      save: dex
    damage:
      - dieCount: 1
        dieType: 8
        type: kinetic
    duration:
      length: 0
      unit: instant
    range:
      short: self
    concentration: false
---
You cause the earth to burst from beneath your feet. Each creature within range, other than you, must succeed on a Dexterity saving throw or take 1d8 kinetic damage.

This power's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).
    