---
name: Force Jump
version: 1
level: 1
alignment: universal
prerequisite: Force Leap
type: force
tags:
  - damage
classes:
  - consular
  - guardian
  - sentinel
  - adept
  - beguiler
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
      length: 0
      unit: instant
    range:
      short: Self
    concentration: false
---
Using the Force to augment the strength in your legs, you leap up to 30 feet to an unoccupied space you can see, provided you have a direct path to the space.

***__At Higher Levels__:*** When you cast this power using a force slot of 2nd level or higher, your jump distance increases by 5 feet for each slot level above 1st.
    