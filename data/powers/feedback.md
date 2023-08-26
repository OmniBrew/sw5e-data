---
name: Feedback
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
      save: int
    damage:
      - dieCount: 1
        dieType: 4
        type: psychic
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
You unleash a burst of psychic energy at a target within range. If the target can hear you (though it need not understand you), it must succeed on an Intelligence saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.

This power's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).
    