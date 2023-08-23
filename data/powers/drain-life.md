---
name: DRAIN LIFE
version: 1
level: 4
alignment: dark side
prerequisite: Drain Vitality
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
      - dieCount: 8
        dieType: 8
        type: necrotic
    duration:
      length: Instantaneous
      unit: 
    range:
      short: 60
    concentration: False
---
You draw the life force from a creature you can see
within range. The target must make a Constitution
saving throw. The target takes 8d8 necrotic damage on
a failed save, or half as much damage on a successful
one. If you reduce a hostile creature to 0, you gain
temporary hit points equal to half the damage dealt.
This power has no effect on droids or constructs.
Force Potency. When you cast this power using a
force slot of 5th level or higher, the damage increases
by 1d8 for each slot level above 4th.

    