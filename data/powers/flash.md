---
name: Flash
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
      short: 90
    concentration: false
---
You create a massive flash of light and explosion of sound at a point within range. Roll 6d10; the total is how many hit points of creatures this power can affect. Creatures within 20 feet of the point are affected in ascending order of their current hit points (ignoring unconscious creatures).

Starting with the creature that has the lowest current hit points, each creature affected by this power is blinded until the end of your next turn. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st.
    