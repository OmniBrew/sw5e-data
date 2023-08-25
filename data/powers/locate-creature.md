---
name: Locate Creature
version: 1
level: 4
alignment: universal
prerequisite: Locate Object
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
      length: 1
      unit: minute
    range:
      short: Self
    concentration: true
---
Describe or name a creature familiar to you. You sense the direction to the creature's location, as long as its within 1000 feet of you. If the creature is in motion, you know the direction of its movement. The power can locate a specific creature known to you or the nearest of a specific kind, as long as you have seen it while within 30 feet of it. If the creature is in a different form, the power doesn't work. This power can't locate a creature if running water at least 10 feet wide blocks a direct path between you and the creature.
    