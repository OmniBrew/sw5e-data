---
name: Venomous Strike
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
        dieType: 4
        type: poison
    duration:
      length: 0
      unit: instant
    range:
      short: Varies
    concentration: false
---
As part of the action used to cast this power, you must make a melee weapon attack against one creature within your reach, otherwise the power fails. On a hit, the target suffers the attack's normal effects, and if you were hidden from it, it takes an additional 1d4 poison damage. 

This power's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 poison damage to the target, and the damage the target takes when you are hidden from it increases to 2d4. Both damage rolls increase by 1d8 and 1d4, respectively, at 11th level and 17th level.
    