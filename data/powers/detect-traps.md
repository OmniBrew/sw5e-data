---
name: Detect Traps
version: 1
level: 2
alignment: none
prerequisite: 
type: tech
tags:
  - damage
classes:
  - tech
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
      unit: minute
    range:
      short: Self
    concentration: true
---
You sense the presence, general location, and nature of any trap within 120 feet of you that is within line of sight. A trap, for this power, includes anything that would inflict a sudden or unexpected effect you consider harmful or undesirable, which was specifically intended by its creator. 

While the power is active, you have advantage on Wisdom (Perception) and Intelligence (Investigation) checks to find any traps that are within line of sight.
    