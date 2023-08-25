---
name: Spirit Blade
version: 1
level: 0
alignment: universal
prerequisite: 
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
        dieType: 10
        type: necrotic
    duration:
      length: 0
      unit: instant
    range:
      short: Touch
    concentration: false
---
You conjure a blade of spirit energy and attempt to strike one creature. Make a melee force attack against the target. If the attack hits, the creature takes 1d10 necrotic damage.

This power can make multiple attacks at higher levels: two attacks at 5th level, three attacks at 11th level, and four attacks at 17th level. Each attack can target the same creature or different ones. Make a separate attack roll for each target.
    