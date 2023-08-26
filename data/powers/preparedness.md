---
name: Preparedness
version: 1
level: 1
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
      unit: minute
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 1
        dieType: 8
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: touch
    concentration: false
---
You touch a willing creature. For the duration, the target can add 1d8 to its Initiative checks.
    