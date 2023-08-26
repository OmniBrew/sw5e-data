---
name: Freedom of Movement
version: 1
level: 4
alignment: universal
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
      length: 1
      unit: round
    range:
      short: Touch
    concentration: false
---
You touch a willing creature. Its movement is unaffected by difficult terrain, and powers and enhanced effects can't reduce its speed or cause it to be paralyzed or restrained.

The target can spend 5 feet of movement to automatically escape from unenhanced restraints. Additionally, being underwater imposes no penalties on its movement or attacks. 
    