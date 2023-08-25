---
name: Enfeeble
version: 1
level: 0
alignment: dark
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

    dc:
      save: wis
    damage:
      - dieCount: 1
        dieType: 12
        type: necrotic
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
Dark energy courses from your hand at a creature within range. The target must succeed on a Wisdom saving throw. If it is missing any hit points, it takes 1d12 necrotic damage. Otherwise, it takes 1d8.

The power's damage increases by one die when you reach 5th, 11th, and 17th level.
    