---
name: Battle Precognition
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
      unit: action
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
Your attunement to the Force warns you when you are about to enter danger. Until the power ends, your base AC becomes 13 + your Dexterity modifier. This power has no effect if you are wearing armor.
    