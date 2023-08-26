---
name: Burst of Speed
version: 1
level: 1
alignment: universal
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
      proficient: true
    dc: false
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: touch
    concentration: false
---
You touch a creature. The target's speed increases by 10 feet until the power ends.

***__At Higher Levels__:*** When you cast this power using a force slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.
    