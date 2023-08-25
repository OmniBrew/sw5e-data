---
name: Remove Curse
version: 1
level: 3
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
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: Touch
    concentration: false
---
At your touch, all curses affecting one creature or object end. If the object is a cursed enhanced item, its curse remains, but the power breaks its owner's attunement to the object so it can be removed or discarded.
    