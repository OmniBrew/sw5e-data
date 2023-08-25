---
name: Phasestrike
version: 1
level: 1
alignment: universal
prerequisite: 
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
        dieType: 8
        type: force
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: true
---
Until the power ends, your movement doesn't provoke opportunity attacks.

Once before the power ends, you can give yourself advantage on one weapon attack roll on your turn. That attack deals an extra 1d8 force damage on a hit. Whether you hit or miss, your walking speed increases by 30 feet until the end of that turn.
    