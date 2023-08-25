---
name: Firestorm
version: 1
level: 6
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
      - dieCount: 8
        dieType: 8
        type: fire
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
Choose a point on the ground within range, incinerating everything in a 15-foot radius. All creatures must make a Dexterity saving throw, taking 8d8 fire damage on a failure or half as much on a success. All large or smaller creatures are pushed to the edge of the power's radius. You may choose one creature to be at the very center of the firestorm, if you do so that creature has disadvantage on its saving throw and is knocked prone on a failure.

***__At Higher Levels__:*** When you cast this power using a tech slot of 7th level or higher, the damage increases by 1d8 and the radius increases by 5 feet for each slot level above 6th.
    