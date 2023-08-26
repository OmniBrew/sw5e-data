---
name: Explosion
version: 1
level: 3
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
      - dieCount: 8
        dieType: 6
        type: fire
    duration:
      length: 0
      unit: instant
    range:
      short: 150
    concentration: false
---
You create an explosion at a point within range. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.

The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.

***__At Higher Levels__:*** When you cast this power using a tech slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.
    