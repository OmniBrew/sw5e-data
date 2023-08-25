---
name: Telekinetic Burst
version: 1
level: 6
alignment: light
prerequisite: Telekinetic Storm
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
      - dieCount: 8
        dieType: 6
        type: force
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: true
---
A beam of Force energy flashes out from your hand in a 5-foot-wide, 60-foot-long line. Each creature in the line must make a Constitution saving throw. On a failed save, a creature takes 8d6 force damage and is knocked prone. On a successful save, it takes half as much damage and isn't knocked prone. 

You can create a new telekinetic gust as your action on your turn until the power ends.

***__At Higher Levels__:*** When you cast this power using a force slot of 7th level or higher, the damage increases by 2d6 for each slot level above 6th.
    