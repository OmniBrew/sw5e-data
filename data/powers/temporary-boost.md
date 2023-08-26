---
name: Temporary Boost
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
      unit: minute
    range:
      short: touch
    concentration: true
---
You touch one willing creature. Once before the power ends, the target can roll a d4 and add the number rolled to one ability check of its choice. The power then ends.

This power's die increases at higher levels: to a d6 at 5th level, a d8 at 11th level, and a d10 at 17th level.
    