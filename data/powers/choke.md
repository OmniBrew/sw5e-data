---
name: CHOKE
version: 1
level: 3
alignment: dark side
prerequisite: None
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: action


    damage:
      - dieCount: 5
        dieType: 8
        type: force
    duration:
      length: Instantaneous
      unit: 
    range:
      short: 60
    concentration: False
---
You make a constricting gesture at a creature within
range. The target must make a Constitution saving
throw. On a failed save target takes 5d8 force damage
and is restrained until the end of your next turn. On a
successful save, the target takes half as much damage
and is not restrained.
You can use a bonus action while the target is
restrained to move the target up to 5 feet in any
direction.
Force Potency. When you cast this power using a
force slot of 4th level or higher, the damage increases
by 1d8 for each slot level above 3rd.

    