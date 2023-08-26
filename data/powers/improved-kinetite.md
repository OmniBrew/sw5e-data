---
name: Improved Kinetite
version: 1
level: 4
alignment: dark
prerequisite: Kinetite
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
        type: kinetic
    duration:
      length: 1
      unit: minute
    range:
      short: 150
    concentration: true
---
A 20-foot-radius sphere of compressed lightning springs into existence centered on a point you choose within range. The sphere remains for the power’s duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 kinetic damage. The sphere’s space is difficult terrain.

Until the power ends, you can use a bonus action on each of your turns to cause a bolt of lightning to leap from the center of the sphere toward one creature you choose within 60 feet of the center. Make a ranged force attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes 4d6 lightning damage.

Creatures within 30 feet of the sphere have disadvantage on Wisdom (Perception) checks made to listen.

***__At Higher Levels__:*** When you cast this power with a force slot of 5th level or higher, the damage increases for each of its effects by 1d6 for each slot level above 4th.
    