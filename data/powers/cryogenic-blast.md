---
name: Cryogenic Blast
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
      - dieCount: 1
        dieType: 10
        type: kinetic
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
You release a shard of cryogenic energy at one creature within range. Make a ranged tech attack against the target. On a hit, the target takes 1d10 kinetic damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 2d6 cold damage.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st.
    