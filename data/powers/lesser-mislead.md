---
name: Lesser Mislead
version: 1
level: 2
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
      length: 1
      unit: round
    range:
      short: Self
    concentration: false
---
You become invisible at the same time that an illusory double of you appears where you are standing. The double lasts until the end of your next turn, but the invisibility ends if you attack or cast a power.

You can use your action to move your illusory double up to your speed and make it gesture, speak, and behave in whatever way you choose.

As soon as it is attacked or would take damage, the double dissipates.
    