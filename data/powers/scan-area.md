---
name: Scan Area
version: 1
level: 4
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
Program a creature or object that you are familiar with into your tech focus. Using a sonar scan, the tech focus attempts to find a path to the creature's or objects location, as long as that creature or object is within 1,000 feet of you. If the creature or object is moving, you know the direction of its movement.

The power can locate a specific creature or object known to you, or the nearest creature/object of a specific kind (such as a droid or a bothan), so long as you have seen such a creature up close�within 30 feet�at least once. 
    