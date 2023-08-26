---
name: Sonic Shot
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
        type: sonic
    duration:
      length: 1
      unit: round
    range:
      short: varies
    concentration: false
---
As part of the action used to cast this power, you must make a ranged weapon attack against one creature within your weapon's range, otherwise the power fails. On a hit, the target suffers the attack's normal effects, and it becomes wreathed in a sonic barrier until the start of your next turn. If the target willingly moves before then, it immediately takes sonic damage equal to your techcasting ability modifier, becomes deafened until the start of your next turn, and the power ends.

This power's damage increases when you reach higher levels. At 5th level, the ranged attack deals an extra 1d6 sonic damage to the target, and the damage the target takes for moving increases to 1d6 + your techcasting ability modifier.  Both damage rolls increase by an additional 1d6 at 11th and 17th level.
    