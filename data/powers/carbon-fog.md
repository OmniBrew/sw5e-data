---
name: Carbon Fog
version: 1
level: 6
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
      - dieCount: 4
        dieType: 6
        type: cold
    duration:
      length: 1
      unit: minute
    range:
      short: 120
    concentration: true
---
You create a cloud of icy fog in a 20-foot-radius sphere centered on a point you can see. The sphere extends around corners, and its area is heavily obscured. The fog is semi-solid, and its area is considered difficult terrain. Each creature that enters the power's area for the first time on a turn or starts its turn there takes 4d6 cold damage and gains 1 slowed level until the end of its turn. The fog lasts for the duration of the power or until it's dispersed by a wind of moderate or greater speed (at least 10 mph).
    