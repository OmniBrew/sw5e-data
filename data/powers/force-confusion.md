---
name: Force Confusion
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

    dc:
      save: wis
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 120
    concentration: true
---
One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration. The 

charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose.

The target can act normally on its turn if you choose no creature or if none are within its reach.

On your subsequent turns, you must use your action to maintain control over the target, or the power ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the power ends.
    