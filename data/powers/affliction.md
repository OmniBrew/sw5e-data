---
name: AFFLICTION
version: 1
level: 2
alignment: dark side
prerequisite: Slow
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: constitution

    duration:
      length: 1
      unit: minute
    range:
      short: 30
    concentration: True
---
Choose a creature that you can see within range.
That creature must make a Constitution saving throw.
On a failed save, the target gains 1 slowed level, it
takes a -2 penalty to AC and Dexterity saving throws,
and it can't use reactions. On its turn, it can use either
an action or a bonus action, not both. Regardless of the
creature's abilities or items, it can't make more than
one melee or ranged attack during its turn.
If the creature attempts to cast a power with a
casting time of 1 action, roll a d20. On an 11 or higher,
the power doesn't take effect until the creature's next
turn, and the creature must use its action on that turn
to complete the power. If it can't, the power is wasted.
The creatures makes another Constitution saving
throw at the end of its turn. On a successful save, the
effect ends.

    