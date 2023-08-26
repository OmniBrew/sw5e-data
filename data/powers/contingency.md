---
name: Contingency
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
      length: 10
      unit: round
    range:
      short: Self
    concentration: false
---
Choose a tech power of 5th-level or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that power, called the contingent power, as part of casting contingency, expending tech points for both, but the contingent power doesn't come into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two powers. 

The contingent power takes effect immediately after the circumstance is met for the first time, whether or not you want it to, and then contingency ends.

The contingent power takes effect only on you, even if it can normally target others. You can use only one contingency power at a time. If you cast this power again, the effect of another contingency power on you ends. Also, contingency ends on you if your tech focus is ever not on your person.
    