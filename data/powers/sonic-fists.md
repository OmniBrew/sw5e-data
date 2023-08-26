---
name: Sonic Fists
version: 1
level: 1
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
      unit: bonusaction
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 1
        dieType: 10
        type: sonic
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: false
---
You enhance your fists�or analogous appendages�with sonic energy. For the duration, you have a natural weapon which deals 1d10 sonic damage on a hit. Every time you hit a creature that is no more than one size larger than you with a melee attack with this weapon, you can push it 5 feet away from you.
    