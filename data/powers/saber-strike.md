---
name: Saber Strike
version: 1
level: 2
alignment: universal
prerequisite: Saber Assault
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
      save: str
    damage:
      - dieCount: 1
        dieType: 10
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: Self
    concentration: false
---
As part of the action used to cast the power, you can move up to your speed and make one melee weapon attack. On a hit, the attack deals an extra 1d10 damage of the weapon's type. In addition, if you hit with the attack, the target must succeed on a Strength saving throw or be knocked prone.

***__At Higher Levels__:*** When you cast this power using a force slot of 4th level or higher, the bonus weapon damage increases by 1d10 for every two slot levels above 2nd.
    