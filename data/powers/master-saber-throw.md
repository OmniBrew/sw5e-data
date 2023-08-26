---
name: Master Saber Throw
version: 1
level: 7
alignment: universal
prerequisite: greater saber throw
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
      save: dex
    damage:
      - dieCount: 5
        dieType: 8
        type: force
    duration:
      length: 0
      unit: instant
    range:
      short: self
    concentration: false
---
When you cast this power, you must be wielding at least one lightweapon or vibroweapon, otherwise the power fails. When you cast this power, you can throw two weapons, striking creatures in two lines originating from yourself, both 90 feet long and 5 feet wide, or you can throw one weapon in a 90-foot long, 5-foot wide line of your choice originating from yourself and change its direction to move in a second identical line of your choice within range. Each creature in a line must make a Dexterity saving throw. A creature takes 5d8 damage of the same type as the weapon's damage and 5d8 force damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one line is affected only once. The weapons then immediately return to your hand.

***__At Higher Levels__:*** When you cast this power using a force slot of 8th level or higher, the weapon damage and force damage each increase by 1d8 for each slot level above 7th.
    