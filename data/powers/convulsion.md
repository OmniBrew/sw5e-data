---
name: CONVULSION
version: 1
level: 3
alignment: universal
prerequisite: Tremor
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
      - dieCount: 3
        dieType: 12
        type: kinetic
    duration:
      length: Instantaneous
      unit: 
    range:
      short: 120
    concentration: False
---
Choose a point you can see on the ground within
range. A fountain of churned earth and stone erupts in
a 20-foot cube centered on that point. Each creature in
that area must make a Dexterity saving throw. A
creature takes 3d12 kinetic damage on a failed save, or
half as much damage on a successful one. Additionally,
the ground in that area becomes difficult terrain until
cleared. Each 5-foot-square portion of the area
requires at least 1 minute to clear by hand.
Force Potency. When you cast this power using a
force slot of 4th level or higher, the damage increases
by 1d12 for each slot level above 3rd.

    