---
name: Rebuke
version: 1
level: 0
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
      - dieCount: 1
        dieType: 12
        type: force
    duration:
      length: 0
      unit: instant
    range:
      short: Touch
    concentration: false
---
You strike a creature with the righteous fury of the Force. Make a melee force attack against the target, if the attack hits, the target takes force damage depending on its alignment: a dark-aligned creature takes 1d12 force damage, a balanced or unaligned creature takes 1d10 force damage, and a light-aligned creature takes 1d8 force damage.

The power's damage increases by one die when you reach 5th, 11th, and 17th level.
    