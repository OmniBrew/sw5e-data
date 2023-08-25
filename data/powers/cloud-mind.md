---
name: Cloud Mind
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
      - dieCount: 5
        dieType: 8
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 90
    concentration: false
---
Roll 5d8; the total is how many hit points of creatures this power can affect. Creatures within 20 feet of a point you choose are affected in order of their current hit points.

Starting with the creature that has the lowest current hit points, each creature affected by this power falls unconscious. If the power ends, the sleeper takes damage, or someone uses an action wake the sleeper, they will be awoken.

Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.

This power has no effect on droids or constructs.

***__At Higher Levels__:*** When you cast this power using a force slot of 2nd level or higher, you can roll an additional 2d8 for each slot level above 1st. 
    