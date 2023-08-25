---
name: Cryogenic Spray
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
      - dieCount: 8
        dieType: 8
        type: cold
    duration:
      length: 0
      unit: instant
    range:
      short: Self
    concentration: false
---
A blast of cold air erupts from you. Each creature in a 60-foot cone must make a Constitution saving throw. On a failed save, a creature takes 8d8 cold damage, and gains 1 slowed level until the start of your next turn. On a successful save, a creature takes half as much damage and isn't slowed.

A creature killed by this power becomes frozen in carbonite.

***__At Higher Levels__:*** When you cast this power using a tech slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.
    