---
name: Squad Shield
version: 1
level: 7
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
      unit: reaction
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: self
    concentration: true
---
In the face of danger, you create a barrier that protects you and those around you. A faintly glowing sphere of protection with a radius of 10 feet appears. The sphere lasts for the duration.

Any tech power (or force power that deals energy or lightning damage) of 7th level or lower cast from outside the barrier can't affect creatures or objects within it, even if the power is cast using a higher level tech slot. Such a power can target creatures and objects within the barrier, but the power has no effect on them. Similarly, the area within the barrier is excluded from the areas affected by such powers.

Furthermore, hazards of the following types cannot physically pass through the barrier or affect anything within it.

- Physical or energy projectiles.
- A specific effect, such as a thermal detonator's explosion.
- An environmental danger, such as falling rocks or a lava flow.

***__At Higher Levels__:*** When you cast this power using a tech slot of 8th level or higher, the maximum radius increases by 10 feet for each slot level above 7th. In addition, the barrier blocks powers of one level higher for each slot level above 7th.
    