---
name: Scrambling Barrier
version: 1
level: 6
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
      short: Self
    concentration: true
---
An immobile, faintly shimmering barrier springs into existence in a 10-foot radius around you and remains for the duration.

Any tech power of 5th level or lower cast from outside the barrier can't affect creatures or objects within it, even if the power is cast using a higher level tech slot. Such a power can target creatures and objects within the barrier, but the power has no effect on them. Similarly, the area within the barrier is excluded from the areas affected by such powers.

***__At Higher Levels__:*** When you cast this power using a tech slot of 7th level or higher, the barrier blocks powers of one level higher for each slot level above 6th.
    