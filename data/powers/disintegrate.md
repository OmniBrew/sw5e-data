---
name: Disintegrate
version: 1
level: 6
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
      - dieCount: 10
        dieType: 6
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
A blast of corrosive energy emits from you. Choose a target within range. 

A creature targeted by this power must make a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 acid damage. If this damage reduces the target to 0 hit points, it is disintegrated.

A disintegrated creature and everything unenhanced it is wearing or carrying are reduced to a pile of fine gray dust. A creature destroyed in this way can not be revitalized.

This power automatically disintegrates an unenhanced Large or smaller object. If the target is a Huge or larger object, this power disintegrates a 10-foot-cube portion of it. 

***__At Higher Levels__:*** When you cast this power using a tech slot of 7th level or higher, the damage increases by 3d6 for each slot level above 6th.
    