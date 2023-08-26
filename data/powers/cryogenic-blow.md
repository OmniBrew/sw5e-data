---
name: Cryogenic Blow
version: 1
level: 1
alignment: none
prerequisite: 
type: tech
tags:
  - damage
classes:
  - engineer
  - operative
  - scout
  - shield
mechanics:
  - castingTime:
      length: 1
      unit: bonusaction

    dc:
      save: str
    damage:
      - dieCount: 1
        dieType: 6
        type: cold
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: true
---
The next time you hit a creature with a weapon attack during this power's duration, the attack deals an extra 1d6 cold damage to the target. The target must make a Strength saving throw. On a failed save, it gains a level of slowed for the duration. At the start of each of its turns, the target can repeat the saving throw, ending the effect on itself on a success.

***__At Higher Levels__:*** If you cast this power using a tech slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.
    