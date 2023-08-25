---
name: Tracer Bolt
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
      unit: action
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 4
        dieType: 6
        type: energy
    duration:
      length: 1
      unit: round
    range:
      short: 120
    concentration: false
---
A flash of light streaks toward a creature of your choice within range. Make a ranged tech attack against the target. On a hit, the target takes 4d6 energy damage, and the next attack roll made against this target before the end of your next turn has advantage. 

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.
    