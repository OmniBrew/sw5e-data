---
name: Force Body
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
    concentration: false
---
This power enables you to use your health to fuel your force powers. For the duration, when you cast a force power, you can choose to pay up to half the cost of the force power using your hit points instead of your force points. When you do so, your maximum hit points are reduced by the same amount until you complete a long rest.

You may end this effect at any time. If you cast a force power that would reduce your hit points to 0, the power automatically fails and this effect ends.
    