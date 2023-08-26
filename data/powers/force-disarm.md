---
name: Force Disarm
version: 1
level: 0
alignment: universal
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
      save: str
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 30
    concentration: false
---
You select a weapon or object being worn or carried by a Large or smaller creature within range. The creature must make a Strength or Dexterity saving throw (the creature chooses the ability to use). If the item is being carried, this save is made with advantage. On a failed save, the item is pulled directly to you. If you have a free hand, you catch the weapon. Otherwise, it lands at your feet.
    