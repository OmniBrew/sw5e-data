---
name: Target Lock
version: 1
level: 1
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
      unit: bonusaction
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 1
        dieType: 6
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: 90
    concentration: true
---
You choose a creature you can see within range and mark it as your quarry. Until the power ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, the target gains no benefit from one-quarter, half, and three-quarters cover against you, and if the target is invisible, you can see it as if it were visible. If the target drops to 0 hit points before this power ends, you can use a bonus action on a subsequent turn of yours to mark a new creature.

***__At Higher Levels__:*** When you cast this power using a tech slot of 3rd or 4th level, you can maintain your concentration on the power for up to 8 hours. When you use a tech slot of 5th level or higher, you can maintain your concentration on the power for up to 24 hours.
    