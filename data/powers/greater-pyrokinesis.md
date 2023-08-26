---
name: Greater Pyrokinesis
version: 1
level: 4
alignment: universal
prerequisite: improved pyrokinesis
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
      save: dex
    damage:
      - dieCount: 5
        dieType: 8
        type: energy
    duration:
      length: 1
      unit: minute
    range:
      short: 120
    concentration: true
---
You create a wall of Force-enhanced fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration. 

When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 energy damage, or half as much damage on a successful save. 

One side of the wall, selected by you when you cast this power, deals 5d8 energy damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage.

***__At Higher Levels__:*** When you cast this power using a force slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.
    