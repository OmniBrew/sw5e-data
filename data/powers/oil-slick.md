---
name: Oil Slick
version: 1
level: 1
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
      - dieCount: 3
        dieType: 6
        type: fire
    duration:
      length: 1
      unit: minute
    range:
      short: 60
    concentration: false
---
You cover the ground in a 10-foot square within range in oil. For the duration, it is difficult terrain.

When the oil appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw.

The oil is flammable. Any 5 foot square of the oil exposed to fire burns away in one round. Each creature who enters the fire or starts it turn there must make a Dexterity saving throw, taking 3d6 fire damage on a failed save, or half as much on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried.
    