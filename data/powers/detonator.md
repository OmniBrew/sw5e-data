---
name: Detonator
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
        dieType: 6
        type: fire
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
You launch a detonator at a creature. Make a ranged tech attack against a creature you can see within range. On a hit, the target takes 1d6 fire damage, and each creature within 5 feet of the target must make a Dexterity saving throw or take 1d4 fire damage.

This power's damage increases by one die when you reach 5th level (2d6/2d4), 11th level (3d6/3d4), and 17th level (4d6/4d4).
    