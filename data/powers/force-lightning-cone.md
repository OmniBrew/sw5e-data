---
name: FORCE LIGHTNING CONE
version: 1
level: 7
alignment: dark side
prerequisite: Force Chain Lightning
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
      save: dexterity
    damage:
      - dieCount: 12
        dieType: 6
        type: lightning
    duration:
      length: Instantaneous
      unit: 
    range:
      short: Self
    concentration: False
---
Lightning arcs from your hands. Each creature in a
60-foot cone must make a Dexterity saving throw. A
creature takes 12d6 lightning damage on a failed save,
or half as much on a successful one.
Force Potency. When you cast this power using a
force slot of 8th level or higher, the damage increases
by 2d6 for each slot level above 7th.

    