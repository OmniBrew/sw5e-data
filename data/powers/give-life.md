---
name: Give Life
version: 1
level: 0
alignment: light
prerequisite: 
type: force
tags:
  - damage
classes:
  - consular
  - guardian
  - sentinel
  - adept
  - beguiler
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
      length: 0
      unit: instant
    range:
      short: Touch
    concentration: false
---
Placing your hand on another creature you can transfer your own life force to them. You spend and roll one of your Hit Dice and the creature regains that many hit points. This power has no effect on droids or constructs.
    