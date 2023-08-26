---
name: Wire Bind
version: 1
level: 4
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
You produce up to 4 wires, which bind creatures of your choice that you can see within range. A creature can be targeted by more than one wire. 

Each target must make a Dexterity saving throw for each wire that targets it. On a failed save, the creature is restrained and falls prone as it is wrapped securely by the wire.

A creature restrained by a wire can use its action to make a Strength or Dexterity check (its choice) against your tech save DC. On a success, it is no longer restrained by that wire. A wire can also be destroyed; each one has AC 15 and 10 hit points, and has immunity to all damage not dealt by melee weapons.

A wire that misses its target or is escaped falls slack and disintegrates, as do all remaining wires when the power ends.
    