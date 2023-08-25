---
name: Toxic Cloud
version: 1
level: 5
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
      save: con
    damage:
      - dieCount: 5
        dieType: 8
        type: poison
    duration:
      length: 1
      unit: minute
    range:
      short: 120
    concentration: true
---
You create a 20-foot-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around corners. It lasts for the duration or until strong wind disperses the fog, ending the power. Its area is heavily obscured.

When a creature enters the power's area for the first time on a turn or starts its turn there, that creature must make a Constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or don't need to breathe.

The fog moves 10 feet away from you at the start of each of your turns, rolling along the surface of the ground. The vapors, being heavier than air, sink to the lowest level of the land, even pouring down openings.

***__At Higher Levels__:*** When you cast this power using a tech slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.
    