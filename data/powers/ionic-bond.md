---
name: Ionic Bond
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
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 1
        dieType: 8
        type: ion
    duration:
      length: 1
      unit: minute
    range:
      short: 30
    concentration: true
---
A beam of ion energy lances out toward a creature within range, forming a sustained line between you and the target. Make a ranged tech attack against that creature. On a hit, the target takes 1d8 ion damage, and on each of your turns for the duration, you can use a bonus action to deal 1d8 ion damage to the target automatically. The power ends if you use your bonus action to do anything else. The power also ends if the target is ever outside the power's range or if it has total cover from you.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, the initial damage increases by 1d8 for each slot level above 1st.
    