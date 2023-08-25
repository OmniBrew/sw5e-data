---
name: Kill
version: 1
level: 9
alignment: dark
prerequisite: Ruin
type: force
tags:
  - damage
classes:
  - force
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
      short: 60
    concentration: false
---
You compel one creature you can see within range to die instantly. If the creature you choose has 100 hit points or fewer, it dies. Otherwise, the power has no effect.
    