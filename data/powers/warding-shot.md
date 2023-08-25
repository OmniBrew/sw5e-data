---
name: Warding Shot
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
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 1
        dieType: 6
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: Varies
    concentration: false
---
As part of the action used to cast this power, you must make a ranged weapon attack against one creature within your weapon's range, otherwise the power fails. On a hit, the target suffers the attack's normal effects, and a dim barrier surrounds it. The first time it would deal damage before the start of your next turn, that damage is reduced by 1d6. 

This power's damage reduction increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).
    