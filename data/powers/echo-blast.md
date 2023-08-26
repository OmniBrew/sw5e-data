---
name: Echo Blast
version: 1
level: 0
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
      save: wis
    damage:
      - dieCount: 1
        dieType: 8
        type: sonic
    duration:
      length: 0
      unit: instant
    range:
      short: 30
    concentration: false
---
You emit a reverberating pulse of sound at a target within range. The target must succeed on a Wisdom saving throw or take 1d8 sonic damage.

This power can hit multiple targets in succession when you reach higher levels: two targets at 5th level, three targets at 11th level, and four targets at 17th level. Each target must be within 30 feet of the previous target, and the last target must be no further than 30 feet away from you. You can not target the same creature twice in succession.
    