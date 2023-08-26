---
name: Immolate
version: 1
level: 5
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
      - dieCount: 8
        dieType: 6
        type: fire
    duration:
      length: 1
      unit: minute
    range:
      short: 90
    concentration: true
---
Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 8d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the power's duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 4d6 fire damage on a failed save, and the power ends on a successful one. These enhanced flames can't be extinguished by unenhanced means.

If damage from this power kills a target, the target is turned to ash.
    