---
name: Destroy Droid
version: 1
level: 7
alignment: light
prerequisite: disable droid
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
Choose a point that you can see within range. Each droid or construct  must succeed on a Constitution saving throw or be paralyzed for the duration. At the beginning of each of its turns, an affected target takes energy damage equal to twice your forcecasting ability modifier and then repeats this saving throw. On a success, the power ends on the target.
    