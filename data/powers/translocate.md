---
name: Translocate
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
      unit: bonus_action
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: self
    concentration: false
---
Your form shimmers in a holographic configuration, and then collapses. You teleport up to 30 feet to an unoccupied space that you can see.
    