---
name: Improved Force Intuition
version: 1
level: 2
alignment: universal
prerequisite: force intuition
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
      proficient: true
    dc: false
    damage:
      - dieCount: 1
        dieType: 4
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: self
    concentration: true
---
You make your initiative check at advantage, and gain a +2 bonus to AC until the power ends. In addition, until the end of your first turn in the combat, your speed increases by 10 feet and you add 1d4 to your attack rolls. This power ends early if you fail a saving throw or are hit by an attack.
    