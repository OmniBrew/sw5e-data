---
name: Telemetry
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
      length: 0
      unit: instant
    range:
      short: touch
    concentration: false
---
You choose one object that you must touch throughout the casting of the power. If it is an enhanced or modified item, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any powers are affecting the item and what they are.

If the item was created by a power, you learn which power created it. If you instead touch a creature throughout the casting, you learn what force powers, if any, are currently affecting it.
    