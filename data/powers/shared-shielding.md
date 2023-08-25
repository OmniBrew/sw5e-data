---
name: Shared Shielding
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
      unit: round
    range:
      short: Touch
    concentration: false
---
This power wards a willing ally you touch and creates an energy link between you and the target until the power ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage.

The power ends if you drop to 0 hit points or if you and the target become separated by more than 60 feet. It also ends if the power is cast again on either of the connected creatures. You can also dismiss the power as an action.
    