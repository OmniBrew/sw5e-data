---
name: Force Trance
version: 1
level: 3
alignment: light
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
      short: 30
    concentration: false
---
You make a calming gesture, and up to three willing creatures of your choice that you can see within range fall unconscious for the power's duration. The power ends on a target early if it takes damage or someone uses an action to shake or slap it awake. If a target remains unconscious for the full duration, that target gains the benefit of a short rest, and it can't be affected by this power again until it finishes a long rest. This power has no effect on droids or constructs.

***__At Higher Levels__:*** When you cast this power using a force slot of 4th level or higher, you can target one additional willing creature for each slot level above 3rd.
    