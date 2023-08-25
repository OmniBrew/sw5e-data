---
name: Absorb Energy
version: 1
level: 1
alignment: none
prerequisite: 
type: tech
tags:
  - damage
classes:
  - tech
mechanics:
  - castingTime:
      length: 1
      unit: reaction
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 1
        dieType: 6
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: Self
    concentration: false
---
The power captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the power ends.

***__At Higher Levels__:*** When you cast this power using a power slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.
    