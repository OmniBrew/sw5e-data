---
name: Stun Dart
version: 1
level: 8
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
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
You emit a tiny crippling dart at a target within range. If the target has 150 hit points or fewer, it is stunned. Otherwise, the power has no effect.

The stunned target must make a Constitution saving throw at the end of each of its turns. On a successful save, this stunning effect ends.
    