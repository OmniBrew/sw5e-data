---
name: Greater Energy Shield
version: 1
level: 2
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
      unit: reaction
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: 15
    concentration: false
---
An energy shield appears and protects the target. Until the start of the target's next turn, the target has a +5 bonus to AC, including against the triggering attack, and the target takes no damage from *homing rockets*.
    