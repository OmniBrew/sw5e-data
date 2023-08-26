---
name: Locate Object
version: 1
level: 2
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
      unit: minute
    range:
      short: Self
    concentration: true
---
Describe or name an object. You sense the direction to the object's location, as long as its within 1000 feet of you. If the object is in motion, you know the direction of its movement. The power can locate a specific object known to you, as long as you have seen it while within 30 feet of it. Alternatively, the power can locate the nearest object of a particular kind. This power can't locate an object if any thickness of lead blocks a direct path between you and the object.
    