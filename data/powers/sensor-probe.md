---
name: Sensor Probe
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
      short: 30
    concentration: true
---
You create a small, temporary, invisible probe that hovers in the air for the duration. You mentally receive visual information from the probe. It has darkvision out to 30 feet. The eye can look in every direction.

As an action, you can move the probe up to 30 feet in any direction. There's no limit on how far away from you it can be. A solid barrier blocks the probe's movement, but it can pass through an opening at least 1 inch in diameter.
    