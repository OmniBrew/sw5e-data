---
name: Energizing Aura
version: 1
level: 8
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
Energizing light radiates out from you in a 30-foot radius. Creatures of your choice in that radius when you cast this power have advantage on all saving throws, and other creatures have disadvantage on attack rolls against them until the power ends. 
    