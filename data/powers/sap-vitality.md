---
name: Sap Vitality
version: 1
level: 1
alignment: dark
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
      - dieCount: 3
        dieType: 10
        type: necrotic
    duration:
      length: 0
      unit: instant
    range:
      short: Touch
    concentration: false
---
Make a melee force attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage.

***__At Higher Levels__:*** When you cast this power using a force slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.
    