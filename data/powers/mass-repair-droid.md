---
name: Mass Repair Droid
version: 1
level: 5
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
Choose up to six droids or constructs in a 30-foot-radius sphere centered on a point. Each target regains hit points equal to 3d8 + your techcasting ability modifier. This power only affects droids and constructs.

***__At Higher Levels__:*** When you cast this power using a tech slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th.
    