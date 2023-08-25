---
name: Spectrum Discharge
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
      unit: bonusaction

    dc:
      save: dex
    damage:
      - dieCount: 3
        dieType: 6
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: Touch
    concentration: true
---
You touch a willing creature, granting it an elemental charge. Choose acid, cold, fire, lightning, poison or sonic. For the duration, a creature can use an action to expel energy of the chosen type in a 15-foot cone. Each creature in that area must make a Dexterity saving throw, taking 3d6 damage of the chosen type on a failed save, or half as much damage on a successful one.

***__At Higher Levels__:*** When you cast this power using a tech slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.
    