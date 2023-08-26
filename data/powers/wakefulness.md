---
name: Wakefulness
version: 1
level: 2
alignment: universal
prerequisite: Breath Control
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

    dc:
      save: con
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 8
      unit: round
    range:
      short: Self
    concentration: true
---
You use the Force to control your body's functions. For the duration, you gain the following benefits:

- You ignore the effects of any levels of exhaustion you have. 
- You do not need to eat, drink, or sleep. You can't be forced to sleep by any means. To gain the benefits of a long rest, you can spend all 8 hours doing light activity, such as reading and keeping watch. 

If you still have any levels of exhaustion when this power ends, you must make a DC 15 Constitution saving throw. On a failed save, you gain one additional level of exhaustion.
    