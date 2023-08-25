---
name: Invisibility to Cameras
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
      unit: minute
    range:
      short: 10
    concentration: true
---
Up to four creatures of your choice become undetectable to electronic sensors and cameras. Anything the target is wearing or carrying is also undetectable, so long as it's on the target's person. The target is still visible to regular vision.
    