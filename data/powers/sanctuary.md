---
name: Sanctuary
version: 1
level: 1
alignment: light
prerequisite: 
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: bonusaction

    dc:
      save: wis
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
Until the power ends, any creature who targets the warded creature with an attack, a harmful power, or a hostile action must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or power. This power doesn't protect the warded creature from area effects.

If the warded creature makes an attack, casts a power that affects an enemy creature, or takes a hostile action this power ends.
    