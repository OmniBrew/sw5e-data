---
name: Improved Pyrokinesis
version: 1
level: 2
alignment: universal
prerequisite: pyrokinesis
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
      - dieCount: 3
        dieType: 8
        type: energy
    duration:
      length: 0
      unit: instant
    range:
      short: 30
    concentration: false
---
A line of roaring Force-enhanced flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 energy damage on a failed save, or half as much damage on a successful one.

***__At Higher Levels__:*** When you cast this power using a force slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.
    