---
name: Force Throw
version: 1
level: 2
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
      - dieCount: 2
        dieType: 8
        type: force
    duration:
      length: 0
      unit: instant
    range:
      short: 90
    concentration: false
---
You use the Force to move a Large or smaller creature or object not being worn or carried within 

range. The target must make a Strength saving throw. An object automatically fails this saving throw. On a failed save, the creature or object moves a number of feet in a direction of your choice based on its size. A Tiny creature or object can be moved up to 90 feet, a Small creature or object can be moved up to 60 feet, a Medium creature or object can be moved up to 30 feet, and a Large creature or object can be moved up to 10 feet. If at the end of this movement the creature or object strikes another creature or object, they both take 2d8 force damage.

***__At Higher Levels__:*** When you cast this power using a force slot of 3rd level or higher, the range you can throw a creature or object increases by 10 feet, to a maximum of 90 feet, and the power's damage increases by 1d8.
    