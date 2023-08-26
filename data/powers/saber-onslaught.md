---
name: Saber Onslaught
version: 1
level: 4
alignment: universal
prerequisite: Saber Strike
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
        dieType: 6
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: Self
    concentration: false
---
You assume a battle stance. Until the end of your turn, your movement does not provoke opportunity attacks. Additionally, whenever you move, you can make one melee weapon attack against each creature you move within 5 feet of for the first time this turn. On a hit, the attack deals an extra 1d6 damage of the weapon's type, and the target must make a Strength saving throw. On a failed save, you can choose to either knock the target prone, or push it 5 feet away from you.

***__At Higher Levels__:*** When you cast this power using a force slot of 5th level or higher, the bonus weapon damage increases by 1d6 for each slot level above 4th.
    