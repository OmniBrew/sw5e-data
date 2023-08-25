---
name: Aid Droid
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
        dieType: 6
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
Choose one droid or construct that you can see within range. The target can immediately use its reaction to regain hit points equal to 1d6 + your techcasting ability modifier.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, the healing increases by 1d6 for each slot level above 1st.
    