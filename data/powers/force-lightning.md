---
name: Force Lightning
version: 1
level: 3
alignment: dark
prerequisite: shock
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
      - dieCount: 8
        dieType: 6
        type: lightning
    duration:
      length: 0
      unit: instant
    range:
      short: self
    concentration: false
---
A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one. 

The lightning ignites flammable objects in the area that aren't being worn or carried.

***__At Higher Levels__:*** When you cast this power using a force slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.
    