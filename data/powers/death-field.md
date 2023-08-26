---
name: Death Field
version: 1
level: 8
alignment: dark
prerequisite: Siphon Life
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
      save: con
    damage:
      - dieCount: 10
        dieType: 8
        type: necrotic
    duration:
      length: 0
      unit: instant
    range:
      short: 90
    concentration: false
---
You draw the life force from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. A creature takes 10d8 necrotic damage on a failed save, or half as much damage on a successful one. If you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to half the damage dealt. This power has no effect on droids or constructs.
    