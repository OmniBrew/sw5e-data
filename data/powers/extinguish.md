---
name: Extinguish
version: 1
level: 0
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
      - dieCount: 1
        dieType: 4
        type: cold
    duration:
      length: 0
      unit: instant
    range:
      short: 30
    concentration: false
---
You spray carbon foam in a 5-foot cube originating from a point within range. Flames within the affected area are instantly quenched, and objects within the affected area cannot be ignited for at least one minute. Any creature in the affected area must make a Constitution saving throw or take 1d4 cold damage.

When you reach 5th level, this power can instead target a 10-foot cube within range. You gain additional options of increasing size when you reach 11th level (15-foot cube), and 17th level (20-foot cube).
    