---
name: Vortex Shot
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
      unit: action

    dc:
      save: str
    damage:
      - dieCount: 1
        dieType: 6
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: Varies
    concentration: false
---
As part of the action used to cast this power, you must make a ranged weapon attack against one creature within your weapon's range, otherwise the power fails. On a hit, the target suffers the attack's normal effects, and each Large or smaller creature within 10 feet of the target must succeed on a Strength saving throw or be pulled to the nearest unoccupied space adjacent to the target. 

This power deals additional damage when you reach higher levels. At 5th level, the ranged attack deals an extra 1d6 damage. This damage increases by 1d6 again at 11th level and 17th level. The damage is the same type as the weapon's damage.
    