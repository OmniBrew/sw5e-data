---
name: Force Scream
version: 1
level: 3
alignment: dark
prerequisite: 
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
      - dieCount: 4
        dieType: 6
        type: psychic
    duration:
      length: 0
      unit: instant
    range:
      short: self
    concentration: false
---
You emit a scream imbued with the power of the Force. Each creature you choose within 15 feet of you must succeed on a Constitution saving throw. On a failed save, a creature take 4d6 psychic damage, 4d6 sonic damage, and is deafened until the end of its next turn. On a successful save, it takes half as much damage and isn't deafened.
    