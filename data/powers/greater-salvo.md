---
name: Greater Salvo
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
      - dieCount: 15
        dieType: 6
        type: fire
    duration:
      length: 0
      unit: instant
    range:
      short: 120
    concentration: false
---
You launch four projectiles at points you can see within range. Each creature within a 20-foot-radius sphere of each point must make a Dexterity saving throw. A creature takes 15d6 fire damage and 15d6 kinetic damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once. 

The power damages objects in the area and ignites flammable objects that aren't being worn or carried.
    