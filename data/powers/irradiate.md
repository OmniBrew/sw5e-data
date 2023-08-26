---
name: Irradiate
version: 1
level: 2
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

    dc:
      save: con
    damage:
      - dieCount: 3
        dieType: 10
        type: necrotic
    duration:
      length: 1
      unit: minute
    range:
      short: 120
    concentration: true
---
A surge of radiation washes over a creature within range. The creature must make a Constitution saving throw. On a failed save, the target takes 3d10 necrotic damage and suffers one level of exhaustion, which lasts for the duration. On a successful save, the target takes half as much damage and does not suffer a level of exhaustion. A creature exhausted by this power can make a Constitution saving throw at the end of each of its turns. On a successful save, the power ends.

***__At Higher Levels__:*** When you cast this power using a tech slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd.
    