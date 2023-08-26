---
name: Acid Wind
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
      save: con
    damage:
      - dieCount: 2
        dieType: 4
        type: acid
    duration:
      length: 0
      unit: instant
    range:
      short: Self
    concentration: false
---
You produce a breeze full of stinging acid droplets. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d4 acid damage and is blinded until the end of your next turn. On a successful save, the creature takes half as much damage and isn't blinded.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, the damage increases by 1d4 for each slot level above 1st.
    