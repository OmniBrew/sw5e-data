---
name: Mass Malacia
version: 1
level: 3
alignment: universal
prerequisite: malacia
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
      short: 120
    concentration: true
---
Each creature in a 30-foot cube within range must make a Wisdom saving throw. On a failed save, the creature becomes charmed for the duration. While charmed by this power, the creature is incapacitated and has a speed of 0.

The power ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor. This power has no effect on droids or constructs.
    