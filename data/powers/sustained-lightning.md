---
name: Sustained Lightning
version: 1
level: 1
alignment: dark
prerequisite: shock
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
      - dieCount: 1
        dieType: 12
        type: lightning
    duration:
      length: 1
      unit: minute
    range:
      short: 30
    concentration: true
---
You lash out against a creature within range with continual jolts of Force lightning. Make a ranged force attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The power ends if you use your action to do anything else. The power also ends if the target is ever outside the power's range or if it has total cover from you.

***__At Higher Levels__:*** When you cast this power using a force slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st.
    