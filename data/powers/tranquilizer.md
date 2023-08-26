---
name: Tranquilizer
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
      - dieCount: 5
        dieType: 8
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 90
    concentration: false
---
You emit a tranquilizing dart that knocks a creature unconscious. Roll 5d8; if the creature's remaining hit points are less than the total, the creature falls unconscious until the power ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. This power has no effect on droids or constructs.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, you can target an additional creature for each slot level above 1st. For each target, roll 5d8 separately.
    