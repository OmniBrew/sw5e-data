---
name: Precognition
version: 1
level: 9
alignment: universal
prerequisite: danger sense
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
      unit: minute
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
      length: 8
      unit: round
    range:
      short: self
    concentration: false
---
Your mastery of the Force gives you a limited ability to see into the immediate future. For the duration, you can't be surprised and you have advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against you for the duration.
    