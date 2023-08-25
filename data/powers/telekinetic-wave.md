---
name: Telekinetic Wave
version: 1
level: 8
alignment: light
prerequisite: Telekinetic Burst
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
      save: con
    damage:
      - dieCount: 12
        dieType: 6
        type: force
    duration:
      length: 0
      unit: instant
    range:
      short: 150
    concentration: false
---
You manipulate the Force in a 60-foot radius centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. On a failed save, a creature takes 12d6 force damage, is knocked prone, and moved 5 feet in a direction of your choice. On a successful save, it takes half as much damage and isn't knocked prone or moved.

***__At Higher Levels__:*** When you cast this power using a force slot of 9th level, the damage increases by 2d6.
    