---
name: Poison Spray
version: 1
level: 0
alignment: none
prerequisite: 
type: tech
tags:
  - damage
classes:
  - engineer
  - operative
  - scout
  - shield
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: con
    damage:
      - dieCount: 1
        dieType: 12
        type: poison
    duration:
      length: 0
      unit: instant
    range:
      short: 10
    concentration: false
---
You extend your hand toward a creature you can see within range and project a puff of noxious gas. The creature must succeed on a Constitution saving throw or take 1d12 poison damage. 

This power's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).
    