---
name: Kolto Pack
version: 1
level: 1
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
      unit: bonusaction
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 1
        dieType: 4
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
A creature of your choice that you can see within range regains hit points equal to 1d4 + your techcasting ability modifier. This power has no effect on droids or constructs.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.
    