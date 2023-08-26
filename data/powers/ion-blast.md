---
name: Ion Blast
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
        dieType: 4
        type: ion
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
You create a blast of ion energy. Choose one creature within range that you can see, or choose two creatures within range that are within 5 feet of each other that you can see. A target must succeed on a Dexterity saving throw or take 1d4 ion damage. 

This power's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).
    