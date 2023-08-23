---
name: FORCE SCREAM
version: 1
level: 3
alignment: dark side
prerequisite: None
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
      - dieCount: 4
        dieType: 6
        type: psychic
    duration:
      length: Instantaneous
      unit: 
    range:
      short: Self
    concentration: False
---
You emit a scream imbued with the power of the
Force. Each creature you choose within 15 feet of you
must succeed on a Constitution saving throw. On a
failed save, a creature take 4d6 psychic damage, 4d6
sonic damage, and is deafened until the end of its next
turn. On a successful save, it takes half as much
damage and isn't deafened.

    