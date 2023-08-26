---
name: Assess the Situation
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
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: 30
    concentration: true
---
You take a sensory snapshot of a target within range. Your tech grants you a brief insight into the target's defenses. You have advantage on the next attack roll you make against the target before the end of your next turn.

This power benefits additional attacks at higher levels: two attacks at 5th level, three attacks at 11th level, and four attacks at 17th level.
    