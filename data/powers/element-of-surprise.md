---
name: Element of Surprise
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
      unit: reaction

    dc:
      save: dex
    damage:
      - dieCount: 2
        dieType: 10
        type: fire
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
You expel a sabotage charge at the creature that attacked you. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.
    