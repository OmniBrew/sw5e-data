---
name: Saber Slash
version: 1
level: 3
alignment: universal
prerequisite: saber strike
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
      - dieCount: 4
        dieType: 4
        type: force
    duration:
      length: 0
      unit: instant
    range:
      short: 30
    concentration: false
---
You move in a burst of speed to deliver a deadly blow. When you cast this power, you must be wielding a melee weapon with which you are proficient, otherwise, the power fails. As part of the action used to cast this power, you move in a straight line to an unoccupied space within the power's range and strike a creature within your weapon's range. Opportunity attacks provoked by this movement have disadvantage. The creature must make a Dexterity saving throw. On a failed save, it takes damage equal to three rolls of the weapon's damage dice + 4d4 force damage, or half as much damage on a successful one.

***__At Higher Levels__:*** When you cast this power using a force slot of 4th level or higher, the force damage increases by 1d4 for each slot level above 3rd.
    