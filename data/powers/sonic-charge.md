---
name: Sonic Charge
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
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 1
        dieType: 4
        type: sonic
    duration:
      length: 1
      unit: round
    range:
      short: varies
    concentration: false
---
As part of the action used to cast this power, you must make a melee weapon attack against one creature within your reach, otherwise the power fails. On a hit, the target suffers the attack's normal effects, and you begin to emanate a disturbing hum until the start of your next turn. If a hostile creature ends its turn within 5 feet of you, it takes 1d4 sonic damage.

This power's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 sonic damage to the target, and the secondary damage increases by 1d4. Both damage rolls increase by 1d8 and 1d4, respectively, at 11th level and 17th level.
    