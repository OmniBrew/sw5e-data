---
name: Crush
version: 1
level: 6
alignment: dark
prerequisite: choke
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
      save: con
    damage:
      - dieCount: 10
        dieType: 8
        type: force
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
You make a crushing gesture at a creature within range. The target must make a Constitution saving throw. On a failed save target takes 10d8 force damage and is paralyzed until the end of your next turn. On a successful save, the target takes half as much damage and is not paralyzed.

You can use a bonus action while the target is paralyzed to move the target up to 10 feet in any direction.

***__At Higher Levels__:*** When you cast this power using a force slot of 7th level or higher, the damage increases by 1d8 for each slot level above 6th.
    