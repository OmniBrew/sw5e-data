---
name: Truth Serum
version: 1
level: 2
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
      short: Touch
    concentration: false
---
You administer a poison to a creature you touched that prevents it from telling lies. The creature touched must make a Constitution saving throw. On a success, nothing happens. On a failure, the creature can't speak a deliberate lie until the power ends.

An affected creature is aware of the power and can thus avoid answering questions to which it would normally respond with a lie. Such a creature can be evasive in its answers as long as it remains within the boundaries of the truth.
    