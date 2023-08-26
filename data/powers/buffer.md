---
name: Buffer
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
        dieType: 4
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: self
    concentration: false
---
You gain 1d4 + 4 temporary hit points for the duration. 

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st.
    