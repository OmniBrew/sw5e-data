---
name: Stinger
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
        type: poison
    duration:
      length: 1
      unit: round
    range:
      short: 120
    concentration: false
---
You fire a stinging dart at a creature within range. Make a ranged tech attack against the target. On a hit, the target takes 1d8 poison damage, and if the target is a humanoid or beast, it can't regain hit points until the start of your next turn.

This power's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).
    