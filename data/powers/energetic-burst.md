---
name: Energetic Burst
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
      - dieCount: 1
        dieType: 4
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: touch
    concentration: false
---
A creature you touch gains 10 temporary hit points. While it has these hit points, the creature can add 1d4 to its saving throws. Any remaining temporary hit points are lost when the power ends.

***__At Higher Levels__:*** When you cast this power with a tech slot of 3rd level or higher, the target gains 5 additional temporary hit points for each slot level above 2nd. When you cast this power at 4th level or higher, the die size increases for every two slot levels above 2nd (d6 at 4th level, d8 at 6th level, d10 at 8th level).
    