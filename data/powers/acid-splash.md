---
name: Acid Splash
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
        type: acid
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
You emit a burst of acid. Choose one creature within range that you can see, or choose two creatures within range that are within 5 feet of each other that you can see. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.

This power's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).
    