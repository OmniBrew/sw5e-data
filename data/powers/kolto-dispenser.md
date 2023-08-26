---
name: Kolto Dispenser
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
      - dieCount: 1
        dieType: 6
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 60
    concentration: true
---
You establish a mobile first aid station that radiates kolto in a 5-foot cube you can see within range.

Until the power ends, whenever you or a creature you can see moves into the station's space for the first time on a turn or starts its turn there, you can cause the station to restore 1d6 hit points to that creature (no action required). The station can heal a number of times equal to 1 + your techcasting ability modifier (minimum of twice). After healing that number of times, the station disintegrates. This power has no effect on droids or constructs.

As a bonus action on your turn, you can move the station up to 30 feet to a space you can see.

***__At Higher Levels__:*** When you cast this power using a tech slot of 3rd level or higher, the healing increases by 1d6 for each slot level above 2nd.
    