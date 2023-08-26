---
name: Animate Weapon
version: 1
level: 2
alignment: universal
prerequisite: Force Disarm
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

    dc:
      save: str
    damage:
      - dieCount: 1
        dieType: 8
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 60
    concentration: false
---
You select a light- or vibro-weapon within this power's range that is not worn or carried by a conscious creature other than you, and use the Force to cause it to levitate, acting as an extension of your will for the duration or until you cast this power again. When you use this power, you can cause the weapon to move up to 20 feet and make a melee force attack against a creature within 5 feet of it. On a hit, the target takes 1d8 + your forcecasting ability modifier damage. The type is of the normal damage dealt by the weapon.

While the weapon is animated, on each of your turns you can use a bonus action to move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it. At any time, you can end this force power to return the animated weapon to your hand.

An enemy can attempt to gain control of the weapon by using its action to make a Strength (Athletics) check against your force save DC. On a success, the creature gains control of the weapon and the power ends.

***__At Higher Levels__:*** When you cast this power using a force slot of 3rd level or higher, the weapon's damage increases by 1d8 for every two slot levels above 2nd.
    