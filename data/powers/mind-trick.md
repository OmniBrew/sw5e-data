---
name: Mind Trick
version: 1
level: 0
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
      short: 30
    concentration: true
---
Choose a target within range that isn't hostile toward you. The target must make a Wisdom saving throw. On a failed save, the target has disadvantage on Wisdom (Perception) and Intelligence (Investigation) checks. 

On a successful save, the creature realizes that you tried to use the Force to influence its awareness and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the GM's discretion), depending on the nature of your interaction with it. This power has no effect on droids or constructs.
    