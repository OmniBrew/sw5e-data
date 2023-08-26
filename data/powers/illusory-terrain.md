---
name: Illusory Terrain
version: 1
level: 4
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
      unit: minute

    dc:
      save: int
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 24
      unit: round
    range:
      short: 300
    concentration: false
---
You make terrain in a 150-foot cube in range look, sound, and smell like some other sort of terrain. 

The tactile characteristics of the terrain are unchanged, so creatures entering the area are likely to see through the illusion. If the difference isn't obvious by touch, a creature carefully examining the illusion can attempt an Intelligence (Investigation) check against your tech save DC to disbelieve it. A creature who discerns the illusion for what it is, sees it as a vague image superimposed on the terrain.
    