---
name: Improved Force Scream
version: 1
level: 5
alignment: dark
prerequisite: force scream
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
      - dieCount: 5
        dieType: 6
        type: psychic
    duration:
      length: 0
      unit: instant
    range:
      short: self
    concentration: false
---
You emit a violent scream imbued with the power of the Force. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw. On a 

failed save, a creature take 5d6 psychic damage, 5d6 sonic damage, is deafened until the end of its next turn, and is knocked prone. On a successful save, it takes half as much damage and isn't deafened or knocked prone.
    