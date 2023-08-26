---
name: Slow Descent
version: 1
level: 1
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
      unit: minute
    range:
      short: 60
    concentration: false
---
Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the power ends. If the creature lands before the power ends, it takes no falling damage and can land on its feet, and the power ends for that creature.
    