---
name: Skill Protocol
version: 1
level: 5
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
    concentration: true
---
You enhance a droid or construct's protocols. You touch one willing droid or construct and give it expertise in one tool or skill of your choice.

You must choose a tool or skill in which the target is proficient and that isn't already benefiting from an effect, such as expertise, that doubles its proficiency bonus.
    