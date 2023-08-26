---
name: Force Repulse
version: 1
level: 3
alignment: universal
prerequisite: 
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
        type: force
    duration:
      length: 0
      unit: instant
    range:
      short: self
    concentration: false
---
You release an omnidirectional telekinetic burst. Each creature within 20 feet must make a Dexterity saving throw. On a failed save, a creature takes 8d6 force damage and is pushed back 5 feet. On a successful save, a creature takes half damage and isn't pushed.

All small objects that are not worn or carried are also pushed 5 feet back.

***__At Higher Levels__:*** When you cast this power using a force slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.
    