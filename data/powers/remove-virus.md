---
name: Remove Virus
version: 1
level: 3
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
      short: touch
    concentration: false
---
At your touch, all tech-based curses affecting one creature or object end. If the object is a cursed enhanced item, its curse remains, but the power breaks its owner's attunement to the object so it can be removed or discarded.
    