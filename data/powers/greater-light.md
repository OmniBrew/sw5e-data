---
name: Greater Light
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
      short: 60
    concentration: false
---
A 60-foot-radius sphere of light spreads from a point you choose. The sphere is bright light and sheds dim light for an additional 60 feet.

If you chose an object you are holding or one that isn't being worn or carried, the light shines from and moves with the object. Completely covering the object with something opaque blocks the light.

If any of this power's area overlaps with enhanced darkness made by a power of 3rd level or lower, the darkness is dispelled.
    