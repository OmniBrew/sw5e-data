---
name: Jet of Flame
version: 1
level: 0
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
      proficient: True
    dc: false
    damage:
      - dieCount: 1
        dieType: 8
        type: fire
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: false
---
A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The power ends if you dismiss it as an action or if you cast it again.

You can also attack with the flame, although doing so ends the power. When you cast this power, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged tech attack. On a hit, the target takes 1d8 fire damage. The fire ignites any flammable objects in the area that aren't being worn or carried.

This power's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).
    