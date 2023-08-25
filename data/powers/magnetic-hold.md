---
name: Magnetic Hold
version: 1
level: 2
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
      short: Touch
    concentration: true
---
Until the power ends, one willing creature you touch gains the ability affix itself to and move along any metallic surface. It can move up, down, and across vertical surfaces and upside down along ceilings, all while leaving its hands free, at its normal walking speed.
    