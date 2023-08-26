---
name: Sense Shatterpoint
version: 1
level: 2
alignment: universal
prerequisite: Battle Insight
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
      unit: bonusaction
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
You seek deeper insight into the defenses of a creature you can see within range. Until the end of your next turn, you have advantage on your next two attack rolls against the target.
    