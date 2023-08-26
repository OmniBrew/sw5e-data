---
name: Darkness
version: 1
level: 2
alignment: dark
prerequisite: 
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
      proficient: True
    dc: false
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 60
    concentration: true
---
Darkness spreads from a point you choose within range to fill a 15-foot-radius sphere until the power ends. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and unenhanced light can't illuminate it.

If the point you choose is on an object you are holding or one that isn't being worn or carried, the darkness comes from the object and moves with it. Completely covering the source of the darkness with an opaque object blocks the darkness.

If this power's area overlaps with light created by a 2nd-level power or lower, the light is dispelled.
    