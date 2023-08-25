---
name: Voltaic Shielding
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
      short: Self
    concentration: false
---
A protective barrier surrounds you, manifesting as crackling lightning that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 lightning damage.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, both the temporary hit points and the lightning damage increase by 5 for each slot.
    