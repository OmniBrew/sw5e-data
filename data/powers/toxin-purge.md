---
name: Toxin Purge
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
      proficient: true
    dc: false
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: touch
    concentration: false
---
You touch a creature. If it is poisoned or diseased, you neutralize the poison or disease. If more than one poison or disease afflicts the target, you neutralize one poison or disease that you know is present, or you neutralize one at random.

For the duration, the target has advantage on saving throws against being poisoned or diseased, and it has resistance to poison damage.
    