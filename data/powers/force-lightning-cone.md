---
name: Force Lightning Cone
version: 1
level: 7
alignment: dark
prerequisite: force chain lightning
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
      - dieCount: 12
        dieType: 6
        type: lightning
    duration:
      length: 0
      unit: instant
    range:
      short: self
    concentration: false
---
Lightning arcs from your hands. Each creature in a 60-foot cone must make a Dexterity saving throw. A creature takes 12d6 lightning damage on a failed save, or half as much on a successful one.

***__At Higher Levels__:*** When you cast this power using a force slot of 8th level or higher, the damage increases by 2d6 for each slot level above 7th.
    