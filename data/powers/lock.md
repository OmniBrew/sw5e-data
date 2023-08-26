---
name: Lock
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
      length: 0
      unit: instant
    range:
      short: Touch
    concentration: false
---
You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this power can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this power for 1 minute. Otherwise, it is impassable until it is broken or the power is dispelled or suppressed. Casting *release* on the object suppresses *lock* for 10 minutes.

While affected by this power, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10.
    