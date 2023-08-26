---
name: Beast Trick
version: 1
level: 1
alignment: light
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
      unit: action

    dc:
      save: int
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 24
      unit: round
    range:
      short: 30
    concentration: false
---
This power lets you distract a beast. Choose a beast that you can see within range. If the beast's Intelligence is 4 or higher, the power fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the power's duration. If you or one of your companions harms the target, the power ends.

***__At Higher Levels__:*** When you cast this power using a force slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.
    