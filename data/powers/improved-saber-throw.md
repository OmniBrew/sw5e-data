---
name: Improved Saber Throw
version: 1
level: 2
alignment: universal
prerequisite: saber throw
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

    dc:
      save: con
    damage:
      - dieCount: 2
        dieType: 8
        type: force
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
As a part of the action used to cast this power, you must make a ranged force attack with a lightweapon or vibroweapon against one target within the power's range, otherwise the power fails. On a hit, the target takes 2d8 damage of the same type as the weapon's damage and must make a Constitution saving throw. On a failed save, the target gains 1 slowed level until the end of its next turn and the weapon then immediately returns to your hand. The next attack made against the target that hits it before the end of the target's next turn deals an additional 1d10 force damage. On a successful save, the target takes half as much additional force damage on the next attack that hits it, and suffers no additional effect. The weapon then immediately returns to your hand.

***__At Higher Levels__:*** When you cast this power using a force slot of 3rd level or higher, the force damage increases by 1d10 for each slot level above 2nd.
    