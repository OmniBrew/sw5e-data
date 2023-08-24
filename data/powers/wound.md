---
name: WOUND
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
      type: ranged
      wp: power
      proficient: True
    dc:
      save: con
    damage:
      - dieCount: 2
        dieType: 8
        type: necrotic
    duration:
      length: Instantaneous
      unit: 
    range:
      short: 60
    concentration: False
---
You make a piercing gesture at a creature within
range. Make a ranged force attack against the target.
On a hit, the target takes 2d8 necrotic damage and
must make a Constitution saving throw. On a failed
save, it is also poisoned until the end of your next turn.
Force Potency. When you cast this power using a
force slot of 2nd level or higher, the damage increases
by 1d8 for each slot level above 1st.

    