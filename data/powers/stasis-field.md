---
name: Stasis Field
version: 1
level: 8
alignment: light
prerequisite: stasis
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
      save: wis
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 120
    concentration: true
---
Choose a point that you can see within range. Each creature within range of that point must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of a target's turns, it can make another Wisdom saving throw. On a success, the power ends on the target. This power has no effect on droids or constructs. 

***__At Higher Levels__:*** When you cast this power using a force slot of 9th level, the size of the cube increases to 40 feet.
    