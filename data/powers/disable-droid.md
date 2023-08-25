---
name: Disable Droid
version: 1
level: 4
alignment: light
prerequisite: Stun Droid
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
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 90
    concentration: true
---
Choose a point that you can see within range. Each droid or construct must succeed on a Constitution saving throw or be paralyzed for the duration. At the beginning of each of its turns, an affected creature takes energy damage equal to your forcecasting ability modifier and then repeats this saving throw. On a success, the power ends on the target.
    