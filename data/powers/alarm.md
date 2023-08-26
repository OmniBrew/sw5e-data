---
name: Alarm
version: 1
level: 1
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
      unit: minute
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
      short: 30
    concentration: false
---
You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the power ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the power, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible. 

A silent alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.

An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.
    