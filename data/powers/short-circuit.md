---
name: Short Circuit
version: 1
level: 0
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
      - dieCount: 1
        dieType: 8
        type: lightning
    duration:
      length: 1
      unit: round
    range:
      short: 120
    concentration: false
---
You electrocute a creature within range. Make a ranged tech attack against the creature. On a hit, the target takes 1d8 lightning damage. If the target is a droid, construct, or has a tech focus, it has disadvantage on the first attack roll it makes against you until the end of your next turn. 

This power's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).
    