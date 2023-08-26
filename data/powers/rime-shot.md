---
name: Rime Shot
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
        type: cold
    duration:
      length: 1
      unit: round
    range:
      short: Varies
    concentration: false
---
As part of the action used to cast this power, you must make a ranged weapon attack against one creature within your weapon's range, otherwise the power fails. On a hit, the target suffers the attack's normal effects, and the creature gains 1 slowed level until the end of its turn as the air around it turns frigid. 

This power deals additional damage when you reach higher levels. At 5th level the ranged attack deals an extra 1d6 cold damage. This damage increases by 1d6 again at 11th level and 17th level.
    