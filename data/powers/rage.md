---
name: Rage
version: 1
level: 6
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

    dc:
      save: str
    damage:
      - dieCount: 2
        dieType: 12
        type: force
    duration:
      length: 1
      unit: minute
    range:
      short: self
    concentration: true
---
You endow yourself with endurance and martial prowess fueled by the Force. Until the power ends, you can't cast powers, and you gain the following benefits:

- You gain 50 temporary hit points. If any of these remain when the power ends, they are lost.
- You have advantage on attack rolls that you make with lightweapons and vibroweapons.
- When you hit a target with a weapon attack, that target takes an extra 2d12 force damage.
- You have proficiency with all armor, lightweapons, and vibroweapons.
- You have proficiency in Strength and Constitution saving throws.
- You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that gives you extra attacks.

Immediately after the power ends, you must succeed on a DC 15 Constitution saving throw or suffer one level of exhaustion.
    