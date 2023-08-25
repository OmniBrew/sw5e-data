---
name: Aura of Vigor
version: 1
level: 3
alignment: light
prerequisite: Valor
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 1
        dieType: 4
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: true
---
Envigorating energy radiates from you in a 30-foot radius. Until the power ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) deals an extra 1d4 damage with weapon attacks.
    