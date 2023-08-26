---
name: Malacia
version: 1
level: 1
alignment: universal
prerequisite: mind trick
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
A creature of your choice that you can see within range is overcome with a sense of dizziness and nausea, as you disturb its equilibrium with the Force. The creature must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration.

At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw if it's triggered by damage. On a success, the power ends. This power has no effect on droids or constructs.
    