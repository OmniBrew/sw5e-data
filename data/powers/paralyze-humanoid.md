---
name: Paralyze Humanoid
version: 1
level: 2
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
      save: con
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 60
    concentration: true
---
You emit a paralyzing dart at a humanoid that you can see within range. The target must succeed on a Constitution saving throw or be poisoned for the duration. While poisoned in this way, the target is paralyzed. At the end of each of its turns, the target can make another Constitution saving throw. On a success, the power ends on the target.

***__At Higher Levels__:*** When you cast this power using a tech slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them.
    