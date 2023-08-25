---
name: Tech Override
version: 1
level: 3
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
      unit: reaction
    attack:
      type: ranged
      wp: power
      proficient: True
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
You attempt to interrupt a creature in the process of casting a tech power. If the creature is casting a power of 3rd level or lower, its power fails and has no effect. If it is casting a power of 4th level or higher, make an ability check using your techcasting ability. The DC equals 10 + the power's level. On a success, the creature's power fails and has no effect.

***__At Higher Levels__:*** When you cast this power using a tech slot of 4th level or higher, the interrupted power has no effect if its level is less than or equal to the level of the tech slot you used.
    