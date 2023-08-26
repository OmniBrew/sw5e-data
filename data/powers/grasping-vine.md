---
name: Grasping Vine
version: 1
level: 4
alignment: light
prerequisite: Plant Surge
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
      unit: bonusaction

    dc:
      save: dex
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
You make a vine sprout from the ground in an unoccupied space you can see. When you cast this power, you can make the vine whip a creature up to 30 feet from it, if you can see the target. The creature must pass a Dexterity save or be pulled 20 feet directly toward the vine.

Until the power ends, you can use your bonus action to have the vine lash out again.
    