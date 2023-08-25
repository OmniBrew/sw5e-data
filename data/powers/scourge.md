---
name: Scourge
version: 1
level: 6
alignment: dark
prerequisite: Plague
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
      save: con
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: true
---
For the power's duration, your eyes become an inky void imbued with dread power. One creature of your choice within 60 feet of you that you can see must succeed on a Constitution saving throw or be affected by one of the following effects of your choice for the duration. On each of your turns until the power ends, you can use your action to target another creature but can't target a creature again if it has succeeded on a saving throw against this casting of *scourge.*

***Asleep.*** The target falls unconscious. It wakes up if it takes any damage or if another creature uses its action to shake the sleeper awake.

***Panicked.*** The target is frightened of you. On each of its turns, the frightened creature must take the Dash action and move away from you by the safest and shortest available route, unless there is nowhere to move. If the target moves to a place at least 60 feet away from you where it can no longer see you, this effect ends.

***Sickened.*** The target has disadvantage on attack rolls and ability checks. At the end of each of its turns, it can make another Constitution saving throw. If it succeeds, the effect ends.
    