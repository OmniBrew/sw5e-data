---
name: Flaming Shots
version: 1
level: 2
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
      - dieCount: 1
        dieType: 6
        type: fire
    duration:
      length: 1
      unit: round
    range:
      short: touch
    concentration: true
---
You channel tech power through a blaster weapon you are wielding. When a target takes damage from the chosen weapon, the target takes an extra 1d6 fire damage. The power ends when twelve shots have been fired.

***__At Higher Levels__:*** When you cast this power using a tech slot of 4th level or higher, the number of shots you can take with this power increases by two for each slot level above 3rd.
    