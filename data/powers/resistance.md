---
name: Resistance
version: 1
level: 0
alignment: universal
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
      proficient: True
    dc: false
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: Touch
    concentration: true
---
You touch one willing creature. Once before the power ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. The power then ends.

This power's die increases at higher levels: to a d6 at 5th level, a d8 at 11th level, and a d10 at 17th level.
    