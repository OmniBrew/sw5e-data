---
name: Mending
version: 1
level: 0
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
      unit: minute
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
This ability repairs a single break or tear in an object you touch, such as broken chain link, two halves of a broken key, a torn strap, or a leaking cup. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage. If you target a droid or construction with this feature, it can spend and roll one of its Hit Dice and regain that many hit points.
    