---
name: Tri-Shot
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
      save: dex
    damage:
      - dieCount: 1
        dieType: 4
        type: energy
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
Choose up to three creatures within range, none of whom can be more than 10 feet apart. If you choose three creatures, each target must succeed on a Dexterity saving throw or take 1d4 energy damage. If you choose two creatures, each target takes 1d6 energy damage on a failed save instead. If you choose only one creature, the target takes 1d8 energy damage on a failed save.

This power's damage increases by one die when you reach 5th level (two dice), 11th level (three dice), and 17th level (four dice).
    