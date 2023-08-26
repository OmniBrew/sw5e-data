---
name: Call Lightning
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

    dc:
      save: dex
    damage:
      - dieCount: 3
        dieType: 10
        type: lightning
    duration:
      length: 1
      unit: minute
    range:
      short: 120
    concentration: true
---
As you align yourself with nature through the Force, a 10-foot tall, 60-foot radius storm cloud cylinder appears, centered on a point you can see within range above you, with you as the center point. The power fails if your location can't accommodate the cloud's size or height. When you cast the power, choose a point under the cloud for lightning to strike. Each creature within 5 feet must make a Dexterity save, taking 3d10 lightning damage on a fail and half on a success. While the power persists, you can use your action to call lightning to a point in range again.

If you're outdoors and in a storm, the power gives you control of the storm rather than creating a new one. The lightning damage also increases by 1d10.

***__At Higher Levels__:*** When you cast this power using a force slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd.
    