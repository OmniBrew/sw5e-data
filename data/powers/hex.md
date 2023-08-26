---
name: Hex
version: 1
level: 1
alignment: dark
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
      unit: bonusaction
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 1
        dieType: 6
        type: necrotic
    duration:
      length: 1
      unit: round
    range:
      short: 90
    concentration: true
---
You curse an opponent within range. Until the power ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the power. The target has disadvantage on ability checks made with the chosen ability.

If the target drops to 0 hit points before this power ends, you can use a bonus action on a subsequent turn of yours to curse a new creature.

***__At Higher Levels__:*** When you cast this power using a force slot of 3rd or 4th level, you can maintain your concentration on the power for up to 8 hours. When you use a force slot of 5th level or higher, you can maintain your concentration on the power for up to 24 hours.
    