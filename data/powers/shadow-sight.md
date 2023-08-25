---
name: Shadow Sight
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
You enhance your eyesight with the Force, allowing you to better see in the dark. For the duration, you have darkvision out to 60 feet.
    