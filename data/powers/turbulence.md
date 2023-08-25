---
name: Turbulence
version: 1
level: 0
alignment: light
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
      save: dex
    damage:
      - dieCount: 1
        dieType: 6
        type: force
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
Choose one creature, or choose two creatures that are within 5 feet of each other, within range. A target must succeed on a Dexterity saving throw or take 1d6 force damage.

This power's damage increases by 1d6 when you reach 5th, 11th, and 17th level.
    