---
name: Force Blinding
version: 1
level: 1
alignment: light
prerequisite: 
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
      proficient: true
    dc: false
    damage:
      - dieCount: 6
        dieType: 10
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: self
    concentration: false
---
You use the Force to emit a blinding flash of light from your hand. Roll 6d10, the total is how many hit points of creatures this power can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see).

Starting with the creature that has the lowest current hit points, each creature affected by this power is blinded until the power ends. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for the creature to be affected.

***__At Higher Levels__:*** When you cast this power using a force slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st.
    