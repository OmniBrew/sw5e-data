---
name: Infiltrate
version: 1
level: 2
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
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: touch
    concentration: true
---
A creature you touch becomes invisible. Anything the target is carrying is invisible as long as it is on the target. The power ends if the target attacks, casts a power, or otherwise take a hostile action.

***__At Higher Levels__:*** You can target one additional creature for each slot level above 2nd.
    