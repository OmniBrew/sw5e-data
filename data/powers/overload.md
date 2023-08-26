---
name: Overload
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
      - dieCount: 2
        dieType: 6
        type: ion
    duration:
      length: 0
      unit: instant
    range:
      short: self
    concentration: false
---
You expel a burst of power. Each creature in a 15-foot cube originating from you must make a Dexterity saving throw. On a failed save, a creature takes 2d6 ion damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.
    