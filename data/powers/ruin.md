---
name: Ruin
version: 1
level: 7
alignment: dark
prerequisite: Wound
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
      save: con
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
You channel the dark side of the Force to desecrate a creature you can see within range, causing waves of intense pain to assail it. If the target has 100 hit points or fewer, it is subject to crippling pain. Otherwise, the power has no effect on it. 

While the target is affected by crippling pain, any speed it has can be no higher than 10 feet. The target also has disadvantage on attack rolls, ability checks, and saving throws, other than Constitution saving throws. Finally, if the target tries to cast a power, it must first succeed on a Constitution saving throw, or the casting fails and the power is wasted.

A target suffering this pain can make a Constitution saving throw at the end of each of its turns. On a successful save, the pain ends.
    