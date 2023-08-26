---
name: Force Storm
version: 1
level: 9
alignment: dark
prerequisite: Force Lightning Cone
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
      - dieCount: 30
        dieType: 6
        type: lightning
    duration:
      length: 1
      unit: minute
    range:
      short: 150
    concentration: true
---
A crackling storm of lightning with a diameter of 60 feet and a height of 120 feet appears in a location you choose within range. Whenever a creature enters the storm or starts its turn there, it must make a Dexterity saving throw. On a failed save, it takes 30d6 lightning damage or half as much as a successful one.

The power damages objects in the area and ignites flammable objects that aren't being worn or carried.
    