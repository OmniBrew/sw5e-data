---
name: Poison Dart
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
      save: con
    damage:
      - dieCount: 2
        dieType: 8
        type: poison
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
Make a ranged tech attack against a creature within range. On hit, the target takes 2d8 poison damage and must make a Constitution save. On a failed save, it is also poisoned until the end of your next turn.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.
    