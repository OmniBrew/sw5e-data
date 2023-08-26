---
name: Plant Surge
version: 1
level: 3
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
      length: 0
      unit: instant
    range:
      short: 150
    concentration: false
---
If you cast this power using 1 action, all normal plants in a 100-foot radius centered on a point become overgrown. Moving through the area spends 4 feet of movement for every 1 foot moved. You can exclude areas of any size within the power's area from being affected.

If you cast this power over 8 hours, all plants in a half-mile radius centered on a point yield twice the normal amount of food when harvested for 1 year.
    