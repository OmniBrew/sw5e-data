---
name: Tremor
version: 1
level: 1
alignment: universal
prerequisite: Burst
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: dex
    damage:
      - dieCount: 1
        dieType: 8
        type: kinetic
    duration:
      length: 0
      unit: instant
    range:
      short: 10
    concentration: false
---
You cause a tremor in the ground within range. Each creature other than you in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. On a failed save, a creature takes 1d8 kinetic damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared, with each 5-foot-diameter portion requiring at least 1 minute to clear by hand.

***__At Higher Levels__:*** When you cast this power using a force slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.
    