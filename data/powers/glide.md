---
name: Glide
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
      short: 30
    concentration: false
---
One willing creature gains the ability to glide when falling. For the duration of the power, it falls at a rate of 30 feet per round and can move up to 30 feet horizontally as well on each of its turns. If the creature lands before the power ends, it takes no falling damage and can land on its feet, and the power ends for that creature.
    