---
name: Stun Droid
version: 1
level: 2
alignment: light
prerequisite: 
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
      short: 60
    concentration: true
---
Choose a droid or construct that you can see within range. The target must succeed on a Constitution saving throw or be paralyzed for the duration. At the beginning of each of its turns, the target takes energy damage equal to your forcecasting ability modifier. At the end of each of its turns, the target can make another Constitution saving throw. On a success, the power ends on the target.
    