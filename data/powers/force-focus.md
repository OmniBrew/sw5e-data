---
name: Force Focus
version: 1
level: 1
alignment: light
prerequisite: Force Technique
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: bonusaction
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 1
        dieType: 4
        type: force
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: true
---
You let the Force guide you, empowering your strikes. Until the power ends, your weapon attacks deal an extra 1d4 force damage on a hit.
    