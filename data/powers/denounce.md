---
name: Denounce
version: 1
level: 0
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
      save: cha
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
A target of your choice within range must make a Charisma saving throw. On a failed save, when the target makes their next attack roll or saving throw they must roll a d4 and subtract the number from it. The power then ends.

This power's die increases at higher levels: to a d6 at 5th level, a d8 at 11th level, and a d10 at 17th level.
    