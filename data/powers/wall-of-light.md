---
name: Wall of Light
version: 1
level: 6
alignment: light
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
      - dieCount: 6
        dieType: 10
        type: force
    duration:
      length: 1
      unit: minute
    range:
      short: 90
    concentration: true
---
You conjure an immense manifestation of destructive light side Force energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover and its space is difficult terrain.

When a creature enters the wall's area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. On a failed save, the creature takes 6d10 force damage, or half as much on a success.
    