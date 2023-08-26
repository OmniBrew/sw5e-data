---
name: Heroism
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
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: Touch
    concentration: true
---
A willing creature you touch is imbued with bravery. Until the power ends, the creature is immune to being frightened and gains temporary hit points equal to your forcecasting ability modifier at the start of each of its turns. When the power ends, the target loses any remaining temporary hit points from this power. This power has no effect on droids or constructs.

***__At Higher Levels__:*** When you cast this power using a force slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.
    