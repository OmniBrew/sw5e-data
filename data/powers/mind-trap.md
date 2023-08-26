---
name: Mind Trap
version: 1
level: 4
alignment: universal
prerequisite: Force Confusion
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
      save: cha
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
You attempt to trap the mind of your target in a psychic cage. The target must make a Charisma saving throw. On a failed save, the creature is incapacitated for the duration as its mind is trapped. It can think, but it can't have any contact with or perceive the outside world. If the creature takes damage, it makes another Charisma save. On a success, the power ends. This power has no effect on droids or constructs.

***__At Higher Levels__:*** When you cast this power using a force slot of 6th level or higher, after 1 minute of concentration the power's duration becomes 24 hours and it no longer requires your concentration.
    