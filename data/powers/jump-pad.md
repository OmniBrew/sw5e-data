---
name: Jump Pad
version: 1
level: 2
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

    dc:
      save: dex
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 60
    concentration: true
---
You create a bouncy surface in a 5-foot square on a surface within range. When you cast the power, you can designate creatures that can safely use the jump pad. For the duration, whenever a creature you haven't chosen enters the affected area, it must make a Dexterity saving throw or be launched 10 feet upwards, and 5 feet horizontally in a random direction. To determine the direction, roll a d8 and assign a direction to each die face.

While a creature you have chosen (or a creature that has succeeded its Dexterity saving throw) is in the area, it can use its reaction to jump with the aid of the bouncy surface. The creature's jump distance for this jump is multiplied by 5.
    