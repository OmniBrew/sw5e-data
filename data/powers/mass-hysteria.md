---
name: Mass Hysteria
version: 1
level: 9
alignment: dark
prerequisite: hysteria
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
      - dieCount: 5
        dieType: 10
        type: psychic
    duration:
      length: 1
      unit: minute
    range:
      short: 120
    concentration: true
---
Drawing on the deepest fears of a group of creatures, you create illusory creatures in their minds, manifesting their worst nightmares as an implacable threat visible only to them. Each creature in a 30-foot-radius sphere is frightened for the duration of the power. At the end of each of the frightened creature's turns, it must succeed on a Wisdom saving throw or take 5d10 psychic damage. On a successful save, the power ends for that creature. This power has no effect on droids or constructs.
    