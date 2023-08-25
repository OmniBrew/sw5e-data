---
name: Debilitating Gas
version: 1
level: 3
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
      save: con
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 90
    concentration: true
---
You create a 20-foot-radius sphere of gas centered on a point. The cloud spreads around corners and its area is heavily obscured. It lingers in the air for the duration.

Each creature completely in the cloud at the start of its turn must make a Constitution save against poison. On a failure, the creature does nothing that turn. Creatures that don't need to breathe or are immune to poison automatically succeed.

A wind of 10mph disperses the cloud after 4 rounds. A wind of 20mph disperses it after 1 round.
    