---
name: Force Camouflage
version: 1
level: 2
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
      unit: round
    range:
      short: Self
    concentration: true
---
You become invisible until the power ends. Anything you are wearing or carrying is invisible as long as it is on your person. The power ends if you attack, cast a power, or otherwise take a hostile action.
    