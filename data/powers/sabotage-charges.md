---
name: Sabotage Charges
version: 1
level: 3
alignment: none
prerequisite: 
type: tech
tags:
  - damage
classes:
  - tech
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: dex
    damage:
      - dieCount: 2
        dieType: 6
        type: fire
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: true
---
You create six tiny sabotage charges that last for the power's duration. When you cast the power, and as a bonus action on subsequent turns, you can hurl up to two of the charges to points you choose within 120 feet. Each charge explodes if it reaches the point or hits a solid surface. Each creature within 5 feet of the explosion must make a Dexterity save. The explosion deals 2d6 fire damage on a failure, or half damage on a success.

***__At Higher Levels__:*** The number of charges created increases by two for each slot level above 3rd.
    