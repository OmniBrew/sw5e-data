---
name: Force Focus
version: 1
level: 1
alignment: light
prerequisite: force technique
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
      unit: bonus_action
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 1
        dieType: 4
        type: force
    duration:
      length: 1
      unit: minute
    range:
      short: self
    concentration: true
---
You let the Force guide you, empowering your strikes. Until the power ends, your weapon attacks deal an extra 1d4 force damage on a hit.
    