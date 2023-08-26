---
name: Pyrokinesis
version: 1
level: 0
alignment: universal
prerequisite: 
type: force
tags:
  - damage
classes:
  - consular
  - guardian
  - sentinel
  - adept
  - beguiler
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: dex
    damage:
      - dieCount: 1
        dieType: 8
        type: energy
    duration:
      length: 1
      unit: minute
    range:
      short: 60
    concentration: true
---
By stimulating air molecules, you create a zone of Force-enhanced fire on ground that you can see within range. Until the power ends, the enhanced fire fills a 5-foot cube. Any creature in the fire's space when you cast the power must succeed on a Dexterity saving throw or take 1d8 energy damage. A creature must also make the saving throw when it moves into the fire's space for the first time on a turn or ends its turn there.

The fire ignites flammable objects in its area that aren't being worn or carried.

The power's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).
    