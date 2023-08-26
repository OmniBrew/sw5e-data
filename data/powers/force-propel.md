---
name: Force Propel
version: 1
level: 1
alignment: universal
prerequisite: Force Push/Pull
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
      save: dex
    damage:
      - dieCount: 3
        dieType: 8
        type: kinetic
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
Choose one or more creatures or objects not being worn or carried within 60 feet that weigh up to a combined total of 15 pounds. The creatures or objects immediately move 60 feet in a direction of your choice. If the creatures or objects end this movement in the air, they immediately fall to the ground. If the creatures or objects collide with any one target during its travel, both the creatures or objects and the target take 3d8 kinetic damage. If the target is a creature, it must make a Dexterity saving throw. On a failed save, it takes the kinetic damage, or half as much on a successful one.

***__At Higher Levels__:*** When you cast this power using a force slot of 2nd level or higher, the maximum weight increases by 15 pounds and the damage increases by 1d8 for each slot level above 1st.
    