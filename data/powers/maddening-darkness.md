---
name: Maddening Darkness
version: 1
level: 8
alignment: dark
prerequisite: Shroud of Darkness
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
      save: wis
    damage:
      - dieCount: 8
        dieType: 8
        type: psychic
    duration:
      length: 1
      unit: minute
    range:
      short: 150
    concentration: true
---
Terrifying darkness spreads from a point you choose within range to fill a 60-foot-radius sphere until the power ends. The darkness spreads around corners. A creature with darkvision can't see through this darkness. Unenhanced light, as well as light created by powers of 8th level or lower, can't illuminate the area.

Shrieks, gibbering, and mad laughter can be heard within the sphere. Whenever a creature starts its turn in the sphere, it must make a Wisdom saving throw, taking 8d8 psychic damage on a failed save, or half as much damage on a successful one.
    