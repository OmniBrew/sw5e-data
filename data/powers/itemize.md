---
name: Itemize
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
      proficient: true
    dc: false
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 30
    concentration: false
---
You instantly learn the exact quantity of one type of item within 30 feet of you. It must be a type of item that you've handled in the past; you can't, for example, use *itemize* to find out how many *BKGs* are nearby if you've never handled such a weapon. The object being itemized must also be reasonably specific. You can learn how many meilooruns are nearby, for example, but not how much fruit.
    