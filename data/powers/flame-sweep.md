---
name: Flame Sweep
version: 1
level: 1
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
      save: dex
    damage:
      - dieCount: 3
        dieType: 6
        type: fire
    duration:
      length: 0
      unit: instant
    range:
      short: Self
    concentration: false
---
A thin sheet of flames shoots forth from you. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.

The fire ignites any flammable objects in the area that aren't being worn or carried.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.
    