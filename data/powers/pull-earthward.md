---
name: Pull Earthward
version: 1
level: 2
alignment: universal
prerequisite: Force Propel
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: str
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 300
    concentration: true
---
Choose one creature you can see within range. The target must succeed on a Strength saving throw or its flying speed (if any) is reduced to 0 feet for the power’s duration. An airborne creature affected by this power descends at 60 feet per round until it reaches the ground or the power ends.
    