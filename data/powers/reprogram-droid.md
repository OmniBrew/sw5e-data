---
name: Reprogram Droid
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
      unit: minute

    dc:
      save: wis
    damage:
      - dieCount: 5
        dieType: 10
        type: lightning
    duration:
      length: 30
      unit: round
    range:
      short: 60
    concentration: false
---
You alter the protocols of a droid that you can see within range, forcing it to carry out some service or refrain from some action or course of activity as you decide. The droid must succeed on a Wisdom saving throw or become charmed by you for the duration. While the droid is charmed by you, it takes 5d10 lightning damage each time it acts in a manner directly counter to your instructions, but it can only do so once each day.

You can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the power ends. You can end the power early by using an action to dismiss it. The *remove virus* power also ends it.

***__At Higher Levels__:*** When you cast this power using a tech slot of 7th or 8th level, the duration is 1 year. When you cast this power using a tech slot of 9th level, the power lasts until it is ended by *remove virus*.
    