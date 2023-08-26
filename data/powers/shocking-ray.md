---
name: Shocking Ray
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
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 2
        dieType: 4
        type: ion
    duration:
      length: 0
      unit: instant
    range:
      short: 120
    concentration: false
---
You create three ionic rays and hurl them at targets within range. You can hurl them at one target or several. Make a ranged tech attack for each ray. On a hit, the target takes 2d4 ion damage.

***__At Higher Levels__:*** When you cast this power using a tech slot of 3rd level or higher, you create one additional ray for each slot level above 2nd.
    