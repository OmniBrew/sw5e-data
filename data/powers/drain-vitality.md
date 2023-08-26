---
name: Drain Vitality
version: 1
level: 2
alignment: dark
prerequisite: Sap Vitality
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
        dieType: 6
        type: necrotic
    duration:
      length: 1
      unit: minute
    range:
      short: 60
    concentration: true
---
You draw the willpower from a creature you can see within range. Make a ranged force attack against the target. On a hit, the target takes 2d6 necrotic damage and it deals only half damage with weapon attacks that use Strength until the power ends.

At the end of each of the target's turns, it can make a Constitution saving throw against the power. On a success, the power ends.

***__At Higher Levels__:*** When you cast this power using a force slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.
    