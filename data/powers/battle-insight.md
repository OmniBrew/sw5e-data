---
name: Battle Insight
version: 1
level: 0
alignment: universal
prerequisite: 
type: force
tags:
  - damage
classes:
  - force
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
You center your focus on a target within range. Through the Force, you gain a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this power hasn't ended.

This power benefits additional attacks at higher levels: two attacks at 5th level, three attacks at 11th level, and four attacks at 17th level.
    