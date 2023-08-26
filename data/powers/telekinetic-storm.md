---
name: Telekinetic Storm
version: 1
level: 3
alignment: light
prerequisite: Turbulence
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
      save: con
    damage:
      - dieCount: 3
        dieType: 8
        type: force
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: true
---
You stir the Force around you, creating a turbulent field of telekinetic energy that buffets enemies around you. The field extends out to a distance of 15 feet around you for the duration.

When you cast this power, you can designate any number of creatures you can see to be unaffected by it. An affected creature gains 1 slowed level while in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Constitution saving throw. On a failed save, the creature takes 3d8 force damage. On a successful save, the creature takes half as much damage.

***__At Higher Levels__:*** When you cast this power using a force power slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.
    