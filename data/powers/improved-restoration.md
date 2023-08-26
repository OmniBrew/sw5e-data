---
name: Improved Restoration
version: 1
level: 5
alignment: light
prerequisite: restoration
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
      length: 0
      unit: instant
    range:
      short: touch
    concentration: false
---
You imbue a creature you touch with positive energy to undo a debilitating effect. You can reduce the target's exhaustion level by one, or end one of the following effects on the target:
- One effect that charmed the target.
- One curse, including the target's attunement to a cursed item.
- Any reduction to one of the target's ability scores.
- One effect reducing the target's hit point maximum.
    