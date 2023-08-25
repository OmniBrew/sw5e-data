---
name: Greater Explosion
version: 1
level: 9
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
      - dieCount: 40
        dieType: 6
        type: fire
    duration:
      length: 0
      unit: instant
    range:
      short: 150
    concentration: false
---
You expell a massive explosion at a point within range. Each creature in a 40-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 40d6 fire damage and is knocked prone on a failed save, or half as much damage on a successful one but remain standing.

The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.
    