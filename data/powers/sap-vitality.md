---
name: SAP VITALITY
version: 1
level: 1
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
      - dieCount: 3
        dieType: 10
        type: necrotic
    duration:
      length: Instantaneous
      unit: 
    range:
      short: Touch
    concentration: False
---
Make a melee force attack against a creature you can
reach. On a hit, the target takes 3d10 necrotic damage.
Force Potency. When you cast this power using a
force slot of 2nd level or higher, the damage increases
by 1d10 for each slot level above 1st.

    