---
name: BREAK
version: 1
level: 0
alignment: universal
prerequisite: None
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
      - dieCount: 1
        dieType: 4
        type: kinetic
    duration:
      length: Instantaneous
      unit: 
    range:
      short: 30
    concentration: False
---
You inflict 10 force damage to an object you can see within range that is not being worn or carried, generating an explosion of sound that can be heard up to 100 feet away. Even if the object is not destroyed, small shards of shrapnel fly at creatures within 5 feet of it. Each creature must make a Dexterity saving throw. On a failed save, a creature takes 1d4 kinetic damage.

This power’s kinetic damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4), and the power’s force damage also increases by 10 at each of these levels.


    