---
name: FORCE CURRENT
version: 1
level: 1
alignment: universal
prerequisite: Force Push/Pull
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
      save: str
    damage:
      - dieCount: 3
        dieType: 6
        type: force
    duration:
      length: Instantaneous
      unit: 
    range:
      short: Self
    concentration: False
---
When you cast this power, you raise your hand and unleash a burst of Force energy. Each creature in a 15-foot cone must make a Strength saving throw. On a failed save, a creature takes 3d6 force damage and, if it is Large or smaller, is also pushed back 5 feet. On a successful save, a creature takes half as much damage and isn’t pushed. All Medium or smaller objects that are not worn or carried within the area of effect are also pushed 5 feet.

Force Potency. When you cast this power using a force slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st. For each slot 2 levels higher than 1st, you can add an additional 5 feet to the push.


    