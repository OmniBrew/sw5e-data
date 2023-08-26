---
name: Psychic Charge
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
      proficient: True
    dc: false
    damage:
      - dieCount: 1
        dieType: 8
        type: psychic
    duration:
      length: 1
      unit: round
    range:
      short: Varies
    concentration: false
---
As part of the action used to cast this power, you must make a melee weapon attack against one creature within your reach, otherwise the power fails. On a hit, the target suffers the attack's normal effects, and its mouth is covered by a violet veil until the start of your next turn. If the target willingly speaks before then, it immediately takes 1d8 psychic damage, and the power ends.

This power's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 psychic damage to the target, and the damage the target takes for speaking increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level.
    