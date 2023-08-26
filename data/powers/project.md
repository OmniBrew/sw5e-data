---
name: Project
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
        dieType: 4
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 120
    concentration: false
---
You lift three piles of debris or small objects from the ground and hurl them. Each pile hits a creature of your choice that you can see within range. The pile deals 1d4+1 force damage to its target. The piles all strike simultaneously and you can direct them to hit one creature or several.

***__At Higher Levels__:*** When you cast this power using a force slot of 2nd level or higher, you lift and throw an additional pile of debris for each slot level above 1st.
    