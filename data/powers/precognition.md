---
name: Precognition
version: 1
level: 9
alignment: universal
prerequisite: Danger Sense
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: minute
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
      length: 8
      unit: round
    range:
      short: Self
    concentration: false
---
Your mastery of the Force gives you a limited ability to see into the immediate future. For the duration, you can't be surprised and you have advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against you for the duration.
    