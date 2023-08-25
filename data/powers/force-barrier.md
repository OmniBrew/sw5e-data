---
name: Force Barrier
version: 1
level: 2
alignment: light
prerequisite: 
type: force
tags:
  - damage
classes:
  - force
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
      length: 8
      unit: round
    range:
      short: 30
    concentration: false
---
This power bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.

***__At Higher Levels__:*** When you cast this power using a force slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd.
    