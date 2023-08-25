---
name: Capacity Boost
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
      unit: bonusaction
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
      short: Touch
    concentration: true
---
You empower a blaster weapon you are holding. For the duration, you can reload the weapon once on each of your turns without using an action, and as a bonus action on each of your turns you can make one attack with the weapon.

***__At Higher Levels__:*** When you cast this power using a tech slot of 5th level or higher, you can make two attacks with your bonus action, instead of one.
    