---
name: Delayed Explosion
version: 1
level: 7
alignment: none
prerequisite: 
type: tech
tags:
  - damage
classes:
  - tech
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: dex
    damage:
      - dieCount: 12
        dieType: 6
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 150
    concentration: true
---
You create a delayed explosion at a point within range. When the power ends, either because your concentration is broken or because you decide to end it, the explosion occurs. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes fire damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one.

The power's base damage is 12d6. If at the end of your turn the explosion has not yet occurred, the damage increases by 1d6.

If the explosion is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the power ends immediately, causing the explosion. 

The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.

***__At Higher Levels__:*** When you cast this power using a tech slot of 8th level or higher, the base damage increases by 1d6 for each slot level above 7th.
    