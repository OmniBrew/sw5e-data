---
name: Necrotic Charge
version: 1
level: 0
alignment: dark
prerequisite: 
type: force
tags:
  - damage
classes:
  - consular
  - guardian
  - sentinel
  - adept
  - beguiler
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
      - dieCount: 1
        dieType: 8
        type: necrotic
    duration:
      length: 1
      unit: round
    range:
      short: varies
    concentration: false
---
As part of the action used to cast this power, you must make a melee weapon attack against one creature within your reach, otherwise the power fails. On a hit, the target suffers the attack's normal effects, and you can choose to deal up to 1d8 of necrotic damage, which you suffer as well. This damage can't be reduced or negated in any way. 

This power's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 necrotic damage to the target, and you can increase the secondary damage to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level.
    