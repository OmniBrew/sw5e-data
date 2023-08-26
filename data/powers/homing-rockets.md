---
name: Homing Rockets
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
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 1
        dieType: 4
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 120
    concentration: false
---
You lock on to one or more targets within range and expel a series of three small explosives. Each explosive hits a creature of your choice that you can see within range. An explosive deals 1d4 + 1 fire damage to its target. The explosives all strike simultaneously, and you can direct them to hit one creature or several.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, the power creates one more explosive for each slot level above 1st.
    