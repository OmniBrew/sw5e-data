---
name: Kolto Cloud
version: 1
level: 3
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
      unit: bonus_action
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
      short: 60
    concentration: false
---
As you expel kolto, up to six creatures of your choice that you can see within range regain hit points equal to 1d4 + your techcasting ability modifier. This power has no effect on droids or constructs.

***__At Higher Levels__:*** When you cast this power using a tech slot of 4th level or higher, the healing increases by 1d4 for each slot level above 3rd.
    