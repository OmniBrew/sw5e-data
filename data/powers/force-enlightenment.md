---
name: Force Enlightenment
version: 1
level: 2
alignment: light
prerequisite: guidance
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
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 2
        dieType: 6
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: touch
    concentration: true
---
You touch a creature and enhance it with the Force. Choose one of the following effects; the target gains that effect until the power ends.
- ***Strength.*** The target has advantage on Strength checks, and his or her carrying capacity doubles.
- ***Dexterity.*** The target has advantage on Dexterity checks. It also doesn't take damage from falling 20 feet or less if it isn't incapacitated.
- ***Endurance.*** The target has advantage on Constitution checks. It also gains 2d6 temporary hit points, which are lost when the power ends.
- ***Cunning.*** The target has advantage on Intelligence checks.
- ***Wisdom.*** The target has advantage on Wisdom checks.
- ***Splendor.*** The target has advantage on Charisma checks.

This power has no effect on droids or constructs.

***__At Higher Levels__:*** When you cast this power using a force slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.
    