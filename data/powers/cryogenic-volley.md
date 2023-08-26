---
name: Cryogenic Volley
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
      - dieCount: 3
        dieType: 6
        type: cold
    duration:
      length: 0
      unit: instant
    range:
      short: 90
    concentration: false
---
An explosion of cold energy erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. On a failed save, a creature takes 3d6 cold damage, and gains 1 slowed level until the start of your next turn. On a successful save, a creature takes half as much damage and isn't slowed.

***__At Higher Levels__:*** When you cast this power using a tech slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.
    