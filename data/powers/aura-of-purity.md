---
name: Aura of Purity
version: 1
level: 4
alignment: light
prerequisite: Restoration
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
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: true
---
Purifying energy radiates from you in a 30-foot radius. Until the power ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) can't become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions: blinded, charmed, deafened, frightened, paralyzed, poisoned, and stunned. 
    