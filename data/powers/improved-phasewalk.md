---
name: Improved Phasewalk
version: 1
level: 5
alignment: universal
prerequisite: phasewalk
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
      unit: bonus_action
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
      short: self
    concentration: true
---
You teleport up to 60 feet to an unoccupied space you can see. On each of your turns before the power ends, you can use a bonus action to teleport in this way again.
    