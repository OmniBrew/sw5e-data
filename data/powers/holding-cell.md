---
name: Holding Cell
version: 1
level: 4
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
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 120
    concentration: true
---
A sphere of shimmering energy springs into being and encloses a creature or object of Large size or smaller within range. An unwilling creature must make a Dexterity saving throw. On a failed save, the creature is enclosed for the duration.

Nothing�not physical objects, energy, or other power effects�can pass through the barrier, in or out, though a creature in the sphere can breathe. The sphere is immune to all damage, and a creature or object inside can't be damaged by attacks or effects originating from outside, nor can a creature inside the sphere damage anything outside it.

The sphere is weightless and just large enough to contain the creature or object inside. An enclosed creature can use its action to push against the sphere's walls and thus roll the sphere at up to half the creature's speed. Similarly, the globe can be picked up and moved by other creatures.

A disintegrate power targeting the globe destroys it without harming anything inside it.
    