---
name: Armor of Abeloth
version: 1
level: 1
alignment: dark
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
A protective force surrounds you, manifesting as shimmering light that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 psychic damage.

***__At Higher Levels__:*** When you cast this power using a force slot of 2nd level or higher, both the temporary hit points and the psychic damage increase by 5 for each slot.
    