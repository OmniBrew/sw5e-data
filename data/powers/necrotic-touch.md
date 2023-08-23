---
name: NECROTIC TOUCH
version: 1
level: 0
alignment: dark side
prerequisite: None
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack:
      type: melee
      wp: power
      proficient: True

    damage:
      - dieCount: 1
        dieType: 6
        type: necrotic
    duration:
      length: 1
      unit: round
    range:
      short: Touch
    concentration: False
---
You attempt to drain the essence from a creature.
Make a melee force attack against the target. If the
attack hits, the creature takes 1d6 necrotic damage,
and you gain temporary hit points equal to the damage
dealt until the end of your next turn.
This power's damage increases by 1d6 when you
reach 5th level (2d6), 11th level (3d6), and 17th level
(4d6).

    