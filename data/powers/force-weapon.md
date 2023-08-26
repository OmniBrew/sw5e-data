---
name: Force Weapon
version: 1
level: 3
alignment: universal
prerequisite: force imbuement
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
      unit: bonusaction
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: touch
    concentration: true
---
You touch an unenhanced weapon with which you are proficient. While you wield it for the duration, that weapon becomes an enhanced weapon with a +1 bonus to attack rolls and damage rolls. Additionally, you can use your forcecasting ability modifier instead of your Strength or Dexterity modifier for attacks and damage rolls when attacking with that weapon.

***__At Higher Levels__:*** When you cast this power using a force slot of 5th level or higher, the bonus increases to +2. When you use a force slot of 7th level or higher, the bonus increases to +3.
    