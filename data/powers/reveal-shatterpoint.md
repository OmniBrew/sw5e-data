---
name: Reveal Shatterpoint
version: 1
level: 5
alignment: universal
prerequisite: sense shatterpoint
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
      save: cha
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 60
    concentration: true
---
You focus on a creature you can see within range, and gain uncanny insight on its defenses and capabilities through the Force. The target must make a Charisma saving throw. On a failed save, you have advantage on attack rolls against that creature, and it has disadvantage on attack rolls against you for the duration. On a successful save, you have advantage on the next attack roll you make against that creature, and it has disadvantage on its next attack roll against you. Once both attacks have been made, the power ends.
    