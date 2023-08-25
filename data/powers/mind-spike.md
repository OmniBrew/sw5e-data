---
name: Mind Spike
version: 1
level: 2
alignment: dark
prerequisite: 
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
      save: wis
    damage:
      - dieCount: 3
        dieType: 8
        type: psychic
    duration:
      length: 1
      unit: round
    range:
      short: 60
    concentration: true
---
Choose one creature you can see. The target must make a Wisdom saving throw. A creature takes 3d8 psychic damage on a failed save, or half as much damage on a successful one. Additionally, on a failed save, you always know the target's location, but only while the two of you are on the same planet. The target can't become hidden from you, and if it's invisible, it gains no benefits from this condition against you. This power has no effect on droids or constructs.
    