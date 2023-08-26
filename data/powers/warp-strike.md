---
name: Warp Strike
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
        type: energy
    duration:
      length: 1
      unit: round
    range:
      short: Varies
    concentration: false
---
As part of the action used to cast this power, you must make a melee weapon attack against one creature within your reach, otherwise the power fails. On a hit, the target suffers the attack’s normal effects, and you can teleport to an unoccupied space of your choice within 10 feet of you. If you teleport to a space within 5 feet of the target, the target cannot take reactions until the end of its next turn.

This power’s damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d6 energy damage to the target. This extra energy damage increases to 2d6 at 11th level and 3d6 at 17th level.
    