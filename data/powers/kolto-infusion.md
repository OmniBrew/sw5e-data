---
name: Kolto Infusion
version: 1
level: 6
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
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
Choose a creature that you can see within range. A surge of kolto energy washes over the creature, causing it to regain 70 hit points. This power also ends blindness, deafness, and any diseases affecting the target. This power has no effect on droids or constructs.

***__At Higher Levels__:*** When you cast this power using a tech slot of 7th level or higher, the amount of healing increases by 10 for each slot level above 6th.
    