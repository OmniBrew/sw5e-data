---
name: Instant Translocation
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
      short: Self
    concentration: false
---
Your form shimmers in a holographic configuration and collapses as an attack begins to hit you. You have a +5 bonus to AC against the triggering attack. As part of the same reaction, you can then teleport to an unoccupied space within 30 feet of you, and can make one weapon attack with advantage against the attacker.

***__At Higher Levels__:*** When you cast this power using a tech slot of 4th level or higher, the maximum teleport distance increases by 10 for each slot level above 3rd.
    