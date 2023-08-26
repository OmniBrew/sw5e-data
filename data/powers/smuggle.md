---
name: Smuggle
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
    concentration: true
---
You dampen sound and light and dull the scent from creatures in your vicinity. For the duration, each creature you choose within 30 feet of you has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by enhanced means while within this radius. You can choose yourself as well. A creature that receives this bonus leaves behind no traces of its passage.
    