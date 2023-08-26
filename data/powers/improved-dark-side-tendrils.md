---
name: Improved Dark Side Tendrils
version: 1
level: 3
alignment: dark
prerequisite: dark side tendrils
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
      save: str
    damage:
      - dieCount: 2
        dieType: 6
        type: necrotic
    duration:
      length: 1
      unit: minute
    range:
      short: 150
    concentration: true
---
You summon a 20-foot-radius sphere of inky blackness at a point within range. No light, enhanced or otherwise, can illuminate the area, creatures fully within the area are blinded, and the area is difficult terrain. Any creature that starts its turn in the area takes 2d6 necrotic damage. Any creature that ends its turn in the area must succeed on a Strength saving throw or take 2d6 poison damage as tendrils of dark energy caress it.
    