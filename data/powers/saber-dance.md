---
name: Saber Dance
version: 1
level: 4
alignment: universal
prerequisite: animate weapon
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
        dieType: 10
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: self
    concentration: true
---
A light- or vibro-weapon of your choice that you are wearing or carrying begins to animate, spinning around your body at high speeds in a 10-foot radius centered on you. For the duration, your movement speed is halved, and the weapon moves with you.

When a creature enters the affected area for the first time on a turn or starts its turn there, the creature must make a Dexterity saving throw or take 4d10 damage of the weapon's type, or half as much damage on a successful saving throw.

When this power ends, you can immediately recall the weapon to your hand.

***__At Higher Levels__:*** When you cast this power using a force slot of 5th level or higher, the radius of the power increases to 15 feet, and the power's damage increases by 1d10 for each slot level above 4th.
    