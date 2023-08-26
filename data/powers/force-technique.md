---
name: Force Technique
version: 1
level: 0
alignment: light
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
        type: force
    duration:
      length: 1
      unit: round
    range:
      short: varies
    concentration: false
---
You imbue your weapon with the purifying light of the Force. As part of the action used to cast this power, you must make a melee weapon attack against one creature within your reach, otherwise the power fails. On a hit, the target suffers the attack's normal effects, and it becomes wreathed in a glowing barrier of force energy until the start of your next turn. If the target willingly moves before then, it immediately takes 1d8 force damage, and the power ends.

This power's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 force damage to the target, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level.
    