---
name: Rime Strike
version: 1
level: 0
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
      - dieCount: 1
        dieType: 8
        type: cold
    duration:
      length: 1
      unit: round
    range:
      short: Varies
    concentration: false
---
As part of the action used to cast this power, you must make a melee weapon attack against one creature within your reach, otherwise the power fails. On a hit, the target suffers the attack's normal effects, and gains 1 slowed level until the start of your next turn, as the cold energy seeps into its being. Additionally, if the target doesn't move at least 5 feet before the start of your next turn, it immediately takes 1d8 cold damage, and the power ends. 

This power's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 cold damage to the target, and the damage the target takes for not moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level. 
    