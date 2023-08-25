---
name: Electroshock
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
      length: 0
      unit: instant
    range:
      short: Touch
    concentration: false
---
Lightning springs from you to deliver a shock to a creature you try to touch. Make a melee tech attack against the target. You have advantage on the attack roll if the target is made of metal or wearing armor made of metal. On a hit, the target takes 1d8 lightning damage and becomes shocked until the start of its next turn.

This power's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).
    