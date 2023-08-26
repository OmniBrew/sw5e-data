---
name: Acid Dart
version: 1
level: 2
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
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 4
        dieType: 4
        type: acid
    duration:
      length: 0
      unit: instant
    range:
      short: 90
    concentration: false
---
A shimmering green dart streaks toward a target within range and bursts in a spray of acid. Make a ranged tech attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the dart splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.

***__At Higher Levels__:*** When you cast this power using a tech slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.
    