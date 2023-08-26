---
name: OnOff
version: 1
level: 0
alignment: none
prerequisite: 
type: tech
tags:
  - damage
classes:
  - engineer
  - operative
  - scout
  - shield
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
This power allows you to activate or deactivate any electronic device within range, as long as the device is not being wielded by a creature, and has a clearly defined on or off function that can be easily accessed from the outside of the device. Any device that requires a software-based shutdown sequence to activate or deactivate cannot be affected by *on/off*.
    