---
name: Ionic Strike
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
        dieType: 6
        type: ion
    duration:
      length: 1
      unit: round
    range:
      short: Varies
    concentration: false
---
As part of the action used to cast this power, you must make a melee weapon attack against one creature within your reach, otherwise the power fails. On a hit, the target suffers the attack's normal effects, and it becomes wreathed in an ionic discharge. If the target willingly takes a reaction before the start of your next turn, it immediately takes 1d6 ion damage, and the power ends. 

This power's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d6 ion damage to the target, and the damage the target takes for taking reactions increases to 2d6. Both damage rolls increase by 1d6 at 11th level and 17th level.
    