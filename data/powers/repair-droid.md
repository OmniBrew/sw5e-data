---
name: Repair Droid
version: 1
level: 1
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
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 1
        dieType: 8
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: touch
    concentration: false
---
A droid or construct you touch regains a number of hit points equal to 1d8 + your techcasting ability modifier.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.
    