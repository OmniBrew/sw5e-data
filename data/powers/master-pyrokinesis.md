---
name: Master Pyrokinesis
version: 1
level: 7
alignment: universal
prerequisite: Greater Pyrokinesis
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: dex
    damage:
      - dieCount: 7
        dieType: 10
        type: energy
    duration:
      length: 0
      unit: instant
    range:
      short: 150
    concentration: false
---
A storm made up of sheets of roaring, Force-enhanced flame appears in a location you choose within range. The area of the storm consists of up to ten 10-foot cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make a Dexterity saving throw. It takes 7d10 energy damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one cube is affected only once.

The flame damages objects in the area and ignites flammable objects that aren't being worn or carried.
    