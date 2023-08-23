---
name: AFFECT MIND
version: 1
level: 0
alignment: universal
prerequisite: None
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
      save: wisdom

    duration:
      length: 1
      unit: minute
    range:
      short: 30
    concentration: True
---
Choose a target within range that isn't hostile toward
you. The target must make a Wisdom saving throw. On
a failed save, you have advantage on all Charisma
checks directed at that target.
On a successful save, the creature does not realize
that you tried to use the Force to influence its mood,
but it becomes immune to this power for one day. This
power has no effect on droids or constructs.

    