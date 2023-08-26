---
name: Restoration
version: 1
level: 2
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
      short: Touch
    concentration: false
---
You touch a creature and end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned. This power has no effect on droids or constructs.
    