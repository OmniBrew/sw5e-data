---
name: Vitality Shield
version: 1
level: 2
alignment: universal
prerequisite: Force Body
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: str
    damage:
      - dieCount: 2
        dieType: 8
        type: true
    duration:
      length: 1
      unit: round
    range:
      short: Self
    concentration: false
---
You siphon some of your own vitality to create a barrier in the Force around yourself. You take 2d8 true damage, and gain a number of temporary hit points equal to twice the amount of damage you took. If this damage would reduce your hit points to 0, the power fails. While you have these temporary hit points, you have advantage on Strength, Dexterity and Constitution saving throws. Any remaining temporary hit points are lost when this power ends.

***__At Higher Levels__:*** When you cast this power using a force slot of 3rd level or higher, the true damage increases by 1d8 for each slot level above 2nd.
    