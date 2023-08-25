---
name: Countermeasures
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
      save: int
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: false
---
For the duration, you gain the following benefits:
- You are immune to the *homing rockets* tech power. 
- You and objects you are wearing or carrying cannot be detected by tech powers that reveal your location, such as *scan area* or *frequency scan*, unless the caster makes a successful Intelligence saving throw. 
- Creatures have disadvantage on Wisdom (Survival) checks to track you.
    