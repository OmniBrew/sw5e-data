---
name: Corrosive Sphere
version: 1
level: 4
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
      - dieCount: 10
        dieType: 4
        type: acid
    duration:
      length: 0
      unit: instant
    range:
      short: 150
    concentration: false
---
You create a globule of acid and hurl it at a point within range, where it explodes in a 20-foot-radius sphere. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 10d4 acid damage and another 5d4 acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage and no damage at the end of its next turn.

***__At Higher Levels__:*** When you cast this power using a tech slot of 5th level or higher, the initial damage increases by 2d4 for each slot level above 4th.
    