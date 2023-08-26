---
name: Force Imbuement
version: 1
level: 0
alignment: universal
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
      unit: bonusaction
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 1
        dieType: 8
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: Touch
    concentration: false
---
The crystal inside of a simple lightweapon or the material of a simple vibroweapon or an improvised weapon you are holding is imbued with the power of the Force. For the duration, you can use your forcecasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes 1d8. The weapon also becomes enhanced, if it isn't already, and you become proficient with it, if you aren't already. The power ends if you cast it again or if you let go of the weapon.
    