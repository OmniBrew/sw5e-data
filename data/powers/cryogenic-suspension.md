---
name: Cryogenic Suspension
version: 1
level: 3
alignment: none
prerequisite: 
type: tech
tags:
  - damage
classes:
  - engineer
  - operative
  - scout
  - shield
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
      length: 1
      unit: minute
    range:
      short: 30
    concentration: true
---
Choose up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a Constitution saving throw or be affected by this power for the duration.

An affected target gains 1 slowed level, it takes a -2 penalty to AC and Dexterity saving throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature's abilities or items, it can't make more than one melee or ranged attack during its turn.

If the creature attempts to cast a power with a casting time of 1 action, roll a d20. On an 11 or higher, the power doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the power. If it can't, the power is wasted.	

A creature affected by this power makes another Constitution saving throw at the end of its turn. On a successful save, the effect ends for it.
    