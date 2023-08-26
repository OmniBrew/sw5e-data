---
name: Fear
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
      short: 60
    concentration: true
---
You awaken the sense of mortality in one creature you can see within range. The target must succeed on a Wisdom saving throw or become frightened for the duration. A target with 25 hit points or fewer makes the saving throw with disadvantage. A frightened creature can repeat this save at the end of each of its turns, ending this effect on a success. This power has no effect on constructs or droids.
    