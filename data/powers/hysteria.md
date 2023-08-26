---
name: Hysteria
version: 1
level: 4
alignment: dark
prerequisite: hallucination
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
      - dieCount: 4
        dieType: 10
        type: psychic
    duration:
      length: 1
      unit: minute
    range:
      short: 120
    concentration: true
---
You tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears, visible only to that creature. The target must succeed on a Wisdom saving throw or become frightened for the duration. At the end of each of the target's turns before the power ends, the target must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the power ends. This power has no effect on droids or constructs.

***__At Higher Levels__:*** When you cast this power using a force power slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th.
    