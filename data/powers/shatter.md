---
name: Shatter
version: 1
level: 2
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
      - dieCount: 3
        dieType: 8
        type: sonic
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 sonic damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw.

An unenhanced object that isn't being worn or carried also takes the damage if it's in the power's area.

***__At Higher Levels__:*** When you cast this power using a tech slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.
    