---
name: SIPHON LIFE
version: 1
level: 5
alignment: dark side
prerequisite: Drain Life
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
      - dieCount: 4
        dieType: 8
        type: necrotic
    duration:
      length: 1
      unit: minute
    range:
      short: 60
    concentration: True
---
A tendril of inky darkness reaches out from you,
touching a creature you can see within range to drain
life from it. The target must make a Dexterity saving
throw. On a successful save, the target takes 2d8
necrotic damage, and the power ends. On a failed save,
the target takes 4d8 necrotic damage, and until the
power ends, you can use your action on each of your
turns to automatically deal 4d8 necrotic damage to the
target. The power ends if you use your action to do
anything else, if the target is ever outside the power's
range, or if the target has total cover from you.
Whenever the power deals damage to a target, you
regain hit points equal to half the amount of necrotic
damage the target takes.
Force Potency. When you cast this power using a
force slot of 6th level or higher, the damage increases
by 1d8 for each slot level above 5th.

    