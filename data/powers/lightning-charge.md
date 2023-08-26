---
name: Lightning Charge
version: 1
level: 0
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
      - dieCount: 1
        dieType: 8
        type: lightning
    duration:
      length: 0
      unit: instant
    range:
      short: Varies
    concentration: false
---
You imbue your weapon with debilitating force lightning. As part of the action used to cast this power, you must make a melee weapon attack against one creature within your reach, otherwise the power fails. On a hit, the target suffers the attack's normal effects, and the lightning leaps from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes lightning damage equal to your forcecasting ability modifier.

This power's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 lightning damage to the target, and the lightning damage to the second creature increases to 1d8 + your forcecasting ability modifier. Both damage rolls increase by 1d8 at 11th level and 17th level.
    