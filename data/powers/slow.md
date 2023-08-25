---
name: Slow
version: 1
level: 0
alignment: dark
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
      unit: round
    range:
      short: 15
    concentration: false
---
A hostile creature of your choice must make a Constitution saving throw. On a failed save, the target gains 1 slowed level until the power ends. At the end of each of the creature's turns, it repeats this saving throw, ending the effect on a success.

This power can affect multiple targets when you reach higher levels: two targets at 5th level, three targets at 11th level, and four targets at 17th level. 
    