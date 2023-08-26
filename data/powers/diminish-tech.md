---
name: Diminish Tech
version: 1
level: 3
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
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 120
    concentration: false
---
Choose one creature, object, or tech effect within range. Any tech power of 3rd level or lower on the target ends. For each tech power of 4th level or higher on the target, make an ability check using your techcasting ability. The DC equals 10 + the power's level. On a success, the power ends.

***__At Higher Levels__:*** When you cast this power using a tech slot of 4th level or higher, you automatically end the effects of a tech power on the target if the power's level is equal to or less than the level of the tech slot you used.
    