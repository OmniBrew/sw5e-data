---
name: Revitalize
version: 1
level: 5
alignment: light
prerequisite: spare the dying
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
You return a dead creature you touch to life, provided that it has been dead no longer than 10 minutes. If the creature's soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point. This power has no effect on droids or constructs.

This power also neutralizes any poisons and cures diseases that affected the creature at the time it died. 

This power closes all mortal wounds, but it doesn't restore missing body parts. If the creature is lacking body parts or organs integral for its survival�its head, for instance�the power automatically fails.

Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears. 
    