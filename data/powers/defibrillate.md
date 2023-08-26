---
name: Defibrillate
version: 1
level: 4
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
      short: Touch
    concentration: false
---
You touch a creature that has died within the last minute and administer a shock to restore it to life. That creature returns to life with 1 hit point. This power can't return to life a creature that has died of old age, nor can it restore any missing body parts. If the creature is lacking body parts or organs integral for its survival�its head, for instance�the power automatically fails. Once this power has restored a creature to life, it cannot benefit from this power again until it finishes a short or long rest.
    