---
name: Force Immunity
version: 1
level: 4
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
      unit: minute
    range:
      short: self
    concentration: true
---
An immobile, faintly shimmering barrier springs into existence around you and remains for the duration. The barrier moves with you. Any force power of 3rd level or lower cast from outside the barrier can't affect you, even if the power is cast using a higher level force slot. Such a power can target you, but the power has no effect on you. Similarly, the area within the barrier is excluded from the areas affected by such powers.

***__At Higher Levels__:*** When you cast this power using a force slot of 5th level or higher, the barrier blocks powers of one level higher for each slot level above 4th.
    