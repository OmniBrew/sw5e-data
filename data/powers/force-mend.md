---
name: Force Mend
version: 1
level: 7
alignment: light
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
      - dieCount: 4
        dieType: 8
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: touch
    concentration: false
---
You touch a creature and stimulate its natural healing ability. The target regains 4d8+15 hit points. For the duration of the power, the target regains 1 hit point at the start of each of its turns (10 hit points each minute).

If the creature has a severed part you hold it to the stump, the power instantaneously causes the limb to knit to the stump.

This power has no effect on droids or constructs.
    