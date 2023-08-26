---
name: Greater Translocate
version: 1
level: 5
alignment: none
prerequisite: 
type: tech
tags:
  - damage
classes:
  - tech
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
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: true
---
Your form shimmers in a holographic configuration, and then collapses. You teleport up to 60 feet to an unoccupied space that you can see. On each of your turns before the power ends, you can use a bonus action to teleport in this way again.
    