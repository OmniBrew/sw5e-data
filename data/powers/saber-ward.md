---
name: Saber Ward
version: 1
level: 0
alignment: universal
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
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: Self
    concentration: false
---
You take a defensive stance. Until the end of your next turn, you have resistance against kinetic, energy, and ion damage dealt by weapons.
    