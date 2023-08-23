---
name: IMPROVED FORCE SCREAM
version: 1
level: 5
alignment: dark side
prerequisite: Force Scream
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: action


    damage:
      - dieCount: 5
        dieType: 6
        type: psychic
    duration:
      length: Instantaneous
      unit: 
    range:
      short: Self
    concentration: False
---
You emit a violent scream imbued with the power of
the Force. Each creature you choose within 30 feet of
you must succeed on a Constitution saving throw. On a
failed save, a creature take 5d6 psychic damage, 5d6
sonic damage, is deafened until the end of its next
turn, and is knocked prone. On a successful save, it
takes half as much damage and isn't deafened or
knocked prone.

    