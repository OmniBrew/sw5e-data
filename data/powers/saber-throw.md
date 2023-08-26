---
name: Saber Throw
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
      unit: action
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
      length: 0
      unit: instant
    range:
      short: 30
    concentration: false
---
As a part of the action used to cast this power, you must make a ranged force attack with a lightweapon or vibroweapon against one target within the power's range, otherwise the power fails. On a hit, the target takes 1d8 damage of the same type as the weapon's damage. The weapon then immediately returns to your hand.

This power can hit multiple targets when you reach higher levels: two targets at 5th level, three targets at 11th level, and four targets at 17th level. Each target must be within 30 feet of the previous target, you must make a separate attack roll for each target, and the last target must be no further than 30 feet away from you. You can not hit the same target twice in succession.
    