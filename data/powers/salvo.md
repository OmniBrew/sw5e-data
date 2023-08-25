---
name: Salvo
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
      - dieCount: 3
        dieType: 6
        type: kinetic
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
You launch three projectiles at points you can see within range. Each creature within a 10-foot radius sphere of each point must make a Dexterity saving throw. A creature takes 3d6 fire and 3d6 kinetic damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one sphere is affected only once.

The power damages objects in the area and ignites flammable objects that aren't being worn or carried.

***__At Higher Levels__:*** When you cast this power using a tech slot of 6th level or higher, you create four projectiles. When you cast this power using a tech slot of 8th level or higher, you create five projectiles.
    