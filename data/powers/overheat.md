---
name: Overheat
version: 1
level: 2
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
      save: con
    damage:
      - dieCount: 2
        dieType: 8
        type: fire
    duration:
      length: 1
      unit: minute
    range:
      short: 60
    concentration: true
---
Choose a manufactured metal object, such as a blaster or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the power. Until the power ends, you can use a bonus action on each of your subsequent turns to cause this damage again.

If an object is held, worn, or integrated, and a creature takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn't�or can't�drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn.

***__At Higher Levels__:*** When you cast this power using a tech slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.
    