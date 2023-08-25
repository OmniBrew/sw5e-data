---
name: Force Vision
version: 1
level: 2
alignment: universal
prerequisite: 
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: minute
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
      short: 60
    concentration: false
---
You receive a vision of the future through the Force, giving you or one willing creature you can see within range a chance to change fate. When the chosen creature makes an ability check, an attack roll, or a saving throw before the power ends, it can dismiss this power on itself to roll an additional d20 and choose which of the d20s to use. Alternatively, when an attack roll is made against the chosen creature, it can dismiss this power on itself to roll a d20 and choose which of the d20s to use, the one it rolled or the one the attacker rolled. 

If the original d20 roll has advantage or disadvantage, the creature rolls the additional d20 after advantage or disadvantage has been applied to the original roll.

***__At Higher Levels__:*** When you cast this power using a force slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.
    