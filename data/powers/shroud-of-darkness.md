---
name: Shroud of Darkness
version: 1
level: 4
alignment: dark
prerequisite: darkness
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
      proficient: true
    dc: false
    damage:
      - dieCount: 2
        dieType: 8
        type: necrotic
    duration:
      length: 1
      unit: minute
    range:
      short: self
    concentration: true
---
You become heavily obscured to others. Dim light within 10 feet of you becomes darkness, and bright light becomes dim light.

Until the power ends, you have resistance to force damage. Additionally, whenever a creature within 10 feet of you hits you with an attack, it takes 2d8 necrotic damage.
    