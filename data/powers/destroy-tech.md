---
name: Destroy Tech
version: 1
level: 3
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
      save: int
    damage:
      - dieCount: 4
        dieType: 8
        type: ion
    duration:
      length: 0
      unit: instant
    range:
      short: 120
    concentration: false
---
Make a ranged tech attack against a creature within range. On a hit, the target takes 4d8 ion damage. Additionally, if the target has tech points, it must make an Intelligence saving throw. On a failed save, it loses 5 tech points, as though it expended a tech slot.

***__At Higher Levels__:*** When you cast this power with a tech slot of 4th level or higher, the ion damage increases by 1d8, and the amount of tech points lost increases by 1 for each slot level above 3rd.
    