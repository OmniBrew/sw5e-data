---
name: MASTER FORCE SCREAM
version: 1
level: 8
alignment: dark side
prerequisite: Improved Force Scream
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
      - dieCount: 6
        dieType: 6
        type: sonic
    duration:
      length: Instantaneous
      unit: 
    range:
      short: Self
    concentration: False
---
You emit a cacophonous scream imbued with the
power of the Force. Each creature you choose within
60 feet of you must succeed on a Constitution saving
throw. On a failed save, a creature takes 6d6 psychic
damage, 6d6 sonic damage, is deafened, knocked
prone, and blinded for 1 minute. On a successful save,
it takes half as much damage and isn't deafened,
knocked prone, or blinded by this power.
A creature blinded by this power makes another
Constitution saving throw at the end of each of its
turns. On a successful save, it is no longer blinded.

    