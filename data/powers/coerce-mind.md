---
name: Coerce Mind
version: 1
level: 2
alignment: universal
prerequisite: Affect Mind
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
      save: wis
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 8
      unit: round
    range:
      short: 30
    concentration: true
---
You suggest a course of activity (limited to a sentence or two) and influence with the Force a creature you can see within range that can hear and understand you.  Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to harm itself automatically negates the effect of the power.

The target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the power ends when the subject finishes what it was asked to do.

You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a soldier give her speeder to the first vagrant she meets. If the condition isn't met before the power expires, the activity isn't performed.

If you or any of your companions damage the target, the power ends. This power has no effect on droids or constructs.
    