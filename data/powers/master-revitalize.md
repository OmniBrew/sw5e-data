---
name: Master Revitalize
version: 1
level: 9
alignment: light
prerequisite: Improved Revitalize
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
      unit: hour
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
      length: 0
      unit: instant
    range:
      short: Touch
    concentration: false
---
You return a dead creature you touch to life, provided that it has been dead no longer than 1 day. If the creature's soul is both willing and at liberty to rejoin the body, the creature returns to life with all its hit points. This power has no effect on droids or constructs.

This power closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses affecting the creature when it died. The power replaces damaged or missing organs and limbs.
    