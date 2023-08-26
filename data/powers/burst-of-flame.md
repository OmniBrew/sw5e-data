---
name: Burst of Flame
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
        dieType: 8
        type: fire
    duration:
      length: 0
      unit: instant
    range:
      short: self
    concentration: false
---
You expel a burst of flame in a line 30 feet long and 5 feet wide, originating from you. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one.

***__At Higher Levels__:*** When you cast this power using a tech slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.
    