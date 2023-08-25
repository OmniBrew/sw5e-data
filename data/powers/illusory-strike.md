---
name: Illusory Strike
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
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: Varies
    concentration: false
---
As part of the action used to cast this power, you must make a melee weapon attack against one creature within your reach, otherwise the power fails. On a hit, the target suffers the attack's normal effects, and you create an illusory duplicate of yourself in your space that only the target can see. The target has disadvantage on the next attack roll it makes against you before the start of your next turn.

This power creates multiple duplicates when you reach higher levels. At 5th level, you create a second illusory duplicate, and the target has disadvantage on the next two attacks it makes against you before the start of your next turn. The number of duplicates and attacks with disadvantage increases to three at 11th level and four at 17th level.
    