---
name: Tune-up
version: 1
level: 2
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
      unit: minute
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 2
        dieType: 8
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 30
    concentration: false
---
Up to six droids or constructs of your choice that you can see within range each regain hit points equal to 2d8 + your techcasting ability modifier.

***__At Higher Levels__:*** When you cast this power using a tech slot of 3rd level or higher, the healing increases by 1d8 for each slot level above 2nd.
    