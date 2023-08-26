---
name: Breath Control
version: 1
level: 1
alignment: universal
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
      unit: minute
    range:
      short: self
    concentration: false
---
You are able to slow your metabolism in such a way that you can stop breathing and resist the effect of toxins in your body. If you are poisoned, you neutralize the poison. If more than one poison afflicts you, you neutralize one poison that you know is present, or you neutralize one at random.

For the duration, you have advantage on saving throws against being poisoned, resistance to poison damage, and you no longer need to breathe.
    