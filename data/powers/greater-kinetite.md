---
name: Greater Kinetite
version: 1
level: 5
alignment: dark
prerequisite: Kinetite
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
      - dieCount: 5
        dieType: 8
        type: lightning
    duration:
      length: 1
      unit: minute
    range:
      short: 120
    concentration: true
---
A 5-foot diameter sphere of compressed lightning appears in an unoccupied space of your choice and lasts for the duration. Each creature within 5 feet of the sphere when the power is cast must make a Dexterity saving throw. A creature takes 5d8 lightning damage on a failed save, or half as much damage on a successful one. 

As a bonus action on each of your turns, you can move the ball of lightning up to 30 feet vertically or horizontally. If you ram the sphere into a creature, that creature must make a Dexterity saving throw or take 5d8 kinetic damage (or half as much damage on a success), and the sphere stops moving this turn. A creature takes half as damage on a successful Dexterity saving throw.

***__At Higher Levels__:*** When you cast this power with a force slot of 6th level or higher, both the lightning and kinetic damage increase by 1d8 for each slot level above 5th.
    