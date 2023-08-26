---
name: Magnetic Field
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
      short: self
    concentration: true
---
You create a strong magnetic field around you in a 10-foot radius which moves with you, remaining centered on you. The field lasts for the power's duration.

The field has the following effects:
- The area is difficult terrain for creatures other than you.
- The attack rolls of ranged weapon attacks which deal kinetic, energy, or ion damage have disadvantage if the attacks pass in or out of the field.
- Communications equipment cannot communicate into or out of the field.
    