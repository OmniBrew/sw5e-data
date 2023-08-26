---
name: Dun Moch
version: 1
level: 1
alignment: dark
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
      unit: bonusaction

    dc:
      save: wis
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
You attempt to manipulate a creature into fighting you. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your demands. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you; if it succeeds on this saving throw, this power doesn't restrict the target's movement for that turn.

The power ends if you attack any other creature, if you cast a power that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful power on it, or if you end your turn more than 30 feet away from the target. This power has no effect on droids or constructs.
    