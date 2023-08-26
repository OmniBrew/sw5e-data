---
name: Heal
version: 1
level: 1
alignment: light
prerequisite: 
type: force
tags:
  - damage
classes:
  - consular
  - guardian
  - sentinel
  - adept
  - beguiler
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
      short: Touch
    concentration: false
---
A creature you touch regains a number of hit points equal to 1d8 + your forcecasting ability modifier. This power has no effect on droids or constructs.

***__At Higher Levels__:*** When you cast this power using a force slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.
    