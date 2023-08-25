---
name: Smoke Cloud
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
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: 120
    concentration: true
---
You cause thick smoke to erupt from a point within range, filling a 20-foot-radius sphere. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, the radius of the smoke cloud increases by 20 feet for each slot level above 1st.
    