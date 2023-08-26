---
name: Wrack
version: 1
level: 6
alignment: dark
prerequisite: Plague
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
      - dieCount: 14
        dieType: 6
        type: necrotic
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
You wrack the body of a creature that you can see with a virulent, disease-like condition. The target must make a Constitution saving throw. On a failed save, it takes 14d6 necrotic damage, or half as much damage on a successful save. The damage can't reduce the target's hit points below 1. If the target fails the saving throw, its hit point maximum is reduced for 1 hour by an amount equal to the necrotic damage it took. Any effect that removes a disease allows a creature's hit point maximum to return to normal immediately.

***__At Higher Levels__:*** If you cast this power using a force slot of 7th level or higher, the power deals an extra 2d6 damage for each slot level above 6th.
    