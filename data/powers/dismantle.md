---
name: Dismantle
version: 1
level: 0
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
      unit: none
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 1
        dieType: 6
        type: energy
    duration:
      length: 0
      unit: instant
    range:
      short: touch
    concentration: false
---
You break or tear an unenhanced structure or object you touch that is not being worn or carried by a creature other than you. The break or tear can be up to 1 foot in any dimension. When cast this in this way, this power has a casting time of 1 minute.

Alternatively, you can touch a droid or construct when you cast this power. Make a melee tech attack against the target. On a hit, the target takes 1d6 energy damage. When cast in this way, this power has a casting time of 1 action.

This power’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).
    