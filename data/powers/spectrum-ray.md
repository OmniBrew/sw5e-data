---
name: Spectrum Ray
version: 1
level: 0
alignment: none
prerequisite: 
type: tech
tags:
  - damage
classes:
  - tech
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
        dieType: 8
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
You shoot a beam of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or sonic for the type of beam you create, and then make a ranged tech attack against the target. If the attack hits, the creature takes 1d8 damage of the type you chose.

This power's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8) and 17th level (4d8).
    