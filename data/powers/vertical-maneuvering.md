---
name: Vertical Maneuvering
version: 1
level: 3
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
      unit: reaction
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
If you cast this power as a reaction, your fall is stopped, and you remain aloft. For the duration, as long as you are within 30 feet of a solid surface, you have a flying speed of 40 feet. In addition, you can't be knocked prone, and you have advantage on saving throws made against effects that would push you or pull you. When the power ends, you are gently lowered to the ground, if you are within 30 feet of it.
    