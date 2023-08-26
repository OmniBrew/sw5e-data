---
name: Cryogenic Storm
version: 1
level: 4
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
      - dieCount: 2
        dieType: 8
        type: kinetic
    duration:
      length: 0
      unit: instant
    range:
      short: 120
    concentration: false
---
A storm of cryogenic energy encompasses the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes 2d8 kinetic damage and 4d6 cold damage on a failed save, or half as much damage on a successful one.

The storm's area of effect becomes difficult terrain until the end of your next turn.

***__At Higher Levels__:*** When you cast this power using a tech slot of 5th level or higher, the kinetic damage increases by 1d8 for each slot level above 4th.
    