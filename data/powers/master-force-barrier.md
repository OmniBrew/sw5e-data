---
name: Master Force Barrier
version: 1
level: 8
alignment: light
prerequisite: Improved Force Barrier
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
      save: con
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: true
---
This power massively bolsters your allies with toughness and resolve. Creatures of your choice in a 30-foot radius around you when you cast this power gain the following benefits:
- The creature sheds dim light in a 5-foot radius.
- The creature has advantage on all saving throws
- Other creatures have disadvantage on attack rolls against them.
- When a dark side creature hits them with a melee attack, that creature must make a Constitution saving throw or be blinded until the power ends.
    