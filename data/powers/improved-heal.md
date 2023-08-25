---
name: Improved Heal
version: 1
level: 5
alignment: light
prerequisite: Heal
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
      - dieCount: 3
        dieType: 8
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-foot-radius sphere centered on that point. Each target regains hit points equal to 3d8 + your forcecasting ability modifier. This power has no effect on droids or constructs.

***__At Higher Levels__:*** When you cast this power using a force slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th.
    