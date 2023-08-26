---
name: Mind Blank
version: 1
level: 8
alignment: universal
prerequisite: Mind Trap
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
      length: 24
      unit: round
    range:
      short: Touch
    concentration: false
---
Until the power ends, one willing creature you touch is immune to psychic and sonic damage, any effect that would sense its emotions or read its thoughts, and the charmed condition. The power foils powers or effects of similar power used to affect the target's mind or to gain information about the target.
    