---
name: Barrage
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
      - dieCount: 4
        dieType: 6
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 120
    concentration: false
---
You launch 4d6 tiny projectiles at up to four creatures you can see within range. The projectiles can be divided between the targets as desired. Each target must make a Dexterity saving throw. A target takes 1 kinetic damage per projectile, or half as much damage on a successful save.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, you launch an additional 1d6 projectiles and can target one additional creature for each slot level above 1st.
    