---
name: Shocking Shield
version: 1
level: 4
alignment: dark
prerequisite: shock
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
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 2
        dieType: 8
        type: lightning
    duration:
      length: 1
      unit: minute
    range:
      short: self
    concentration: false
---
Lightning courses in a sphere surrounding your body, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. You can use your action to end the power early.

Whenever a creature within 5 feet of you hits you with a melee attack, it takes 2d8 lightning damage.
    