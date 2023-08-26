---
name: Carbonite
version: 1
level: 6
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
      short: 60
    concentration: true
---
You attempt to freeze one creature that you can see within range into carbonite. The creature must make a Constitution saving throw. On a failed save, it is restrained as its flesh begins to harden. On a successful save, the creature isn't affected. 

A creature restrained by this power must make another Constitution saving throw at the end of each of its turns. If it successfully saves against this power three times, the power ends. If it fails its saves three times, it is turned to stone and subjected to the petrified condition for the duration. The successes and failures don't need to be consecutive; keep track of both until the target collects three of a kind.

If the creature is physically broken while frozen in carbonite, it suffers from similar deformities if it reverts to its original state.

If you maintain your concentration on this power for the entire possible duration, the creature is frozen in carbonite until the effect is removed.
    