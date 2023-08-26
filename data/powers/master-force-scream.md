---
name: Master Force Scream
version: 1
level: 8
alignment: dark
prerequisite: improved force scream
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
      - dieCount: 6
        dieType: 6
        type: psychic
    duration:
      length: 0
      unit: instant
    range:
      short: self
    concentration: false
---
You emit a cacophonous scream imbued with the power of the Force. Each creature you choose within 60 feet of you must succeed on a Constitution saving throw. On a failed save, a creature takes 6d6 psychic damage, 6d6 sonic damage, is deafened and blinded for 1 minute, and knocked prone. On a successful save, it takes half as much damage and isn't deafened, blinded, or knocked prone.

A creature blinded by this power makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.
    