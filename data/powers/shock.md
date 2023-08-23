---
name: SHOCK
version: 1
level: 0
alignment: dark side
prerequisite: None
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: action


    damage:
      - dieCount: 1
        dieType: 10
        type: lightning
    duration:
      length: Instantaneous
      unit: 
    range:
      short: 120
    concentration: False
---
You hurl a bolt of lightning at a target within range,
making a ranged force attack. On a hit, the target takes
1d10 lightning damage. The lightning ignites
􀃖ammable objects in the area that aren't being worn or
carried.
This power's damage increases by 1d10 when you
reach 5th level (2d10), 11th level (3d10), and 17th level
(4d10).

    