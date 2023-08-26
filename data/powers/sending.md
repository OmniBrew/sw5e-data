---
name: Sending
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
      length: 1
      unit: round
    range:
      short: Unlimited
    concentration: false
---
You send a short message of twenty-five words or less to a creature with which you are familiar that possesses a commlink. The creature hears the message, recognizes you as the sender if it knows you, and can answer in a like manner immediately. 

You can send the message across any distance and even to other planets, but if the target is on a different planet than you, there is a 5 percent chance that the message doesn't arrive.
    