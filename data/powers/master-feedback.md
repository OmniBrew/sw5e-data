---
name: Master Feedback
version: 1
level: 9
alignment: dark
prerequisite: Greater Feedback
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
      save: int
    damage:
      - dieCount: 14
        dieType: 6
        type: psychic
    duration:
      length: 0
      unit: instant
    range:
      short: 90
    concentration: false
---
You unleash the power of your mind to blast the intellect of up to ten creatures of your choice that you can see within range. Creatures that have an Intelligence score of 2 or lower are unaffected.

Each target must make an Intelligence saving throw. On a failed save, a target takes 14d6 psychic damage and is stunned. On a successful save, a target takes half as much damage and isn't stunned. 

A stunned target can make a Wisdom saving throw at the end of each of its turns. On a successful save, the stunning effect ends.
    