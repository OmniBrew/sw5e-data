---
name: Share Life
version: 1
level: 3
alignment: light
prerequisite: Give Life
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
    dc: false
    damage:
      - dieCount: 4
        dieType: 8
        type: necrotic
    duration:
      length: 0
      unit: instant
    range:
      short: 30
    concentration: false
---
You sacrifice some of your health to mend another creature's injuries. You take 4d8 necrotic damage, and one creature of your choice that you can see within range regains a number of hit points equal to twice the necrotic damage you take. This power has no effect on droids or constructs.

***__At Higher Levels__:*** When you cast this power using a force slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.
    