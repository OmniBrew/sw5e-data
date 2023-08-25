---
name: Haywire
version: 1
level: 0
alignment: none
prerequisite: 
type: tech
tags:
  - damage
classes:
  - tech
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: int
    damage:
      - dieCount: 1
        dieType: 6
        type: lightning
    duration:
      length: 0
      unit: instant
    range:
      short: 30
    concentration: false
---
You momentarily surround a creature you can see within range with electronic interference and holographic illusions. The target must succeed on an Intelligence saving throw, or it takes 1d6 lightning damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction: 1, north; 2, south; 3, east; or 4, west. This movement doesn't provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move.

The power's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).
    