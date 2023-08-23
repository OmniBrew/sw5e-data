---
name: SHOCKING SHIELD
version: 1
level: 4
alignment: dark side
prerequisite: Shock
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: action


    damage:
      - dieCount: 2
        dieType: 8
        type: lightning
    duration:
      length: 10
      unit: minutes
    range:
      short: Self
    concentration: False
---
Lightning courses in a sphere surrounding your
body, shedding bright light in a 10-foot radius and dim
light for an additional 10 feet. You can use your action
to end the power early.
Whenever a creature within 5 feet of you hits you
with a melee attack, it takes 2d8 lightning damage.

    