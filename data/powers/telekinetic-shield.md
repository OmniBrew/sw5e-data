---
name: Telekinetic Shield
version: 1
level: 3
alignment: universal
prerequisite: Animate Weapon
type: force
tags:
  - damage
classes:
  - force
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
      - dieCount: 2
        dieType: 6
        type: force
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: true
---
You lift three piles of debris or small objects from the ground and interpose them between you and your opponents for the duration. 

While at least three piles remain, you have three-quarters cover. While two piles remain, you have half cover. While only one pile remains, you have one-quarter cover. The piles don't hinder your attacks. When you cast the power, or as an action on a subsequent turn, you can direct up to two piles to attack up to two creatures you can see within 30 feet. Make a ranged force attack roll for each pile. On a hit, a creature takes 2d6 kinetic plus 1d10 force damage. The pile is destroyed whether it hits or misses.

***__At Higher Levels__:*** If you cast this power with a force slot of 4th level or higher, the power creates one additional pile for each level above 3rd. 
    