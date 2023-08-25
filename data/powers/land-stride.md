---
name: Land Stride
version: 1
level: 1
alignment: light
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
      length: 8
      unit: round
    range:
      short: Self
    concentration: false
---
You align yourself with nature, making traversing natural environments far easier. For the duration, your movement and that of creatures of your choice within 40 feet of you can't be slowed by natural terrain, such as mud, rocky ground, vines, or tall grass. Climbing still costs double normal movement. A creature that receives this bonus leaves behind no traces of its passage.
    