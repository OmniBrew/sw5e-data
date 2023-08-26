---
name: Pheromone Burst
version: 1
level: 0
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
      unit: action

    dc:
      save: cha
    damage:
      - dieCount: 1
        dieType: 4
        type: poison
    duration:
      length: 0
      unit: instant
    range:
      short: Self
    concentration: false
---
You expel a burst of mood-altering pheromones around you. Each creature within range other than you must succeed on a Charisma saving throw or take 1d4 poison damage and become frightened of you until the start of its next turn. A creature that is immune to the poisoned condition is not frightened.

This power's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).
    