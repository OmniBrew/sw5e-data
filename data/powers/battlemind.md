---
name: Battlemind
version: 1
level: 2
alignment: universal
prerequisite: battle precognition
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
      proficient: true
    dc: false
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: self
    concentration: true
---
Through the Force, you gain a limited form of telepathy that enables you to anticipate the moves of your opponents in combat. While you aren't wearing armor or wielding a shield, you gain a +2 AC bonus against melee attacks and a +3 AC bonus against ranged attacks.

This AC bonus is not applied against attacks from droids, constructs, or creatures with resistance or immunity to psychic damage.
    