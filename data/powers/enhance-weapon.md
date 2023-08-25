---
name: Enhance Weapon
version: 1
level: 3
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
      - dieCount: 1
        dieType: 4
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: Touch
    concentration: true
---
An unenhanced weapon you touch becomes an enhanced weapon. Choose one of these damage types: acid, cold, energy, fire, ion, kinetic, or lightning. For the duration, an unenhanced weapon you touch has a +1 to attack rolls and deals an extra 1d4 damage of the chosen type.

***__At Higher Levels__:*** When you cast this power using a 5th or 6th level tech slot, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When you use a slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4.
    