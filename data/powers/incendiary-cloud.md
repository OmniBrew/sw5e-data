---
name: Incendiary Cloud
version: 1
level: 8
alignment: none
prerequisite: 
type: tech
tags:
  - damage
classes:
  - engineer
  - operative
  - scout
  - shield
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: dex
    damage:
      - dieCount: 10
        dieType: 8
        type: fire
    duration:
      length: 1
      unit: minute
    range:
      short: 150
    concentration: true
---
You create a swirling cloud of smoke shot through with white-hot embers in a 20-foot-radius sphere centered on a point within range. The cloud spreads around corners and is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.

When the cloud appears, each creature in it must make a Dexterity saving throw. A creature takes 10d8 fire damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the power's area for the first time on a turn or ends its turn there.

The cloud moves 10 feet directly away from you in a direction that you choose at the start of each of your turns.
    