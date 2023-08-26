---
name: Disassemble
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
      unit: action

    dc:
      save: int
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: touch
    concentration: false
---
One constructed object up to 100 lbs. in weight that you touch falls to pieces, separating into its component parts. For instance, a vibrosword separates into a blade, handle, oscillator, and guard, while a hovercart collapses into a repulsor engine, bolts, and metal panels. If the object is being worn, carried, or operated by a creature, the creature can make an Intelligence saving throw. On a successful save, the item is unaffected.
    