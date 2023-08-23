---
name: FORCE CHAIN LIGHTNING
version: 1
level: 6
alignment: dark side
prerequisite: Force Lightning
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
      - dieCount: 10
        dieType: 8
        type: lightning
    duration:
      length: Instantaneous
      unit: 
    range:
      short: 150
    concentration: False
---
You create a bolt of lightning that arcs toward a
target of your choice that you can see within range.
Three bolts then leap from that target to as many as
three other targets, each of which must be within 30
feet of the first target. A target can be a creature or an
object and can be targeted by only one of the bolts.
A target must make a Dexterity saving throw. The
target takes 10d8 lightning damage on a failed save, or
half as much damage on a successful one.
Force Potency. When you cast this power using a
force slot of 7th level or higher, one additional bolt
leaps from the first target to another target for each
slot level above 6th.

    