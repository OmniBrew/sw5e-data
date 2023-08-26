---
name: Greater Saber Throw
version: 1
level: 5
alignment: universal
prerequisite: improved saber throw
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
      - dieCount: 6
        dieType: 8
        type: force
    duration:
      length: 0
      unit: instant
    range:
      short: 30
    concentration: false
---
As a part of the action used to cast this power, you must make a ranged force attack with a lightweapon or vibroweapon against one target within the power's range, otherwise the power fails. On a hit, the target takes 6d8 damage of the same type as the weapon's damage and must make a Constitution saving throw against an additional effect depending on your choice of casting ability:

***Wisdom.*** The target takes an additional 4d6 force damage and it gains four levels of slowed until the end of its next turn. On a success, the target takes half as much damage and its speed isn't reduced.

***Charisma.*** The target takes an additional 4d6 necrotic damage and cannot regain hit points until the end of its next turn. On a success, the target takes half as much damage and its healing capability is unaffected.

The weapon then immediately returns to your hand.

***__At Higher Levels__:*** When you cast this power using a force slot of 6th level or higher, the force or necrotic damage increases by 1d6 for each slot above 5th.
    