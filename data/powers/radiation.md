---
name: Radiation
version: 1
level: 4
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
      - dieCount: 4
        dieType: 10
        type: necrotic
    duration:
      length: 1
      unit: minute
    range:
      short: 120
    concentration: true
---
Dim, greenish light spreads within a 30-foot-radius sphere centered on a point you choose within range. The light spreads around corners, and it lasts until the power ends.

When a creature moves into the power's area for the first time on a turn or starts its turn there, that creature must succeed on a Constitution saving throw or take 4d10 necrotic damage, and it suffers one level of exhaustion and emits a dim, greenish light in a 5-foot radius. This light makes it impossible for the creature to benefit from being invisible. The light and any levels of exhaustion caused by this power go away when the power ends.
    