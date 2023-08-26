---
name: Combustive Shot
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
      proficient: true
    dc: false
    damage:
      - dieCount: 1
        dieType: 6
        type: fire
    duration:
      length: 1
      unit: round
    range:
      short: varies
    concentration: false
---
As part of the action used to cast this power, you must make a ranged weapon attack against one creature within your weapon's range, otherwise the power fails. On a hit, the target suffers the attack's normal effects, and it becomes ignited (your techcasting ability modifier). 

This power's damage increases when you reach higher levels. At 5th level, the ranged attack deals an extra 1d6 fire damage to the target, and the ignited damage increases to 1d4 + your tech casting ability modifier. Both damage rolls increase by 1d6 and 1d4, respectively, at 11th level and 17th level.
    