---
name: Acidic Strike
version: 1
level: 0
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
      - dieCount: 1
        dieType: 8
        type: acid
    duration:
      length: 1
      unit: round
    range:
      short: varies
    concentration: false
---
As part of the action used to cast this power, you must make a melee weapon attack against one creature within your reach, otherwise the power fails. On a hit, the target suffers the attack's normal effects, and it becomes sheathed in a thick acidic slime until the start of your next turn. Until the start of your next turn, if the target becomes grappled, or succeeds in grappling or maintaining a grapple, the slime is pressed into its body, causing it to immediately take 1d8 acid damage. 

This power's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 acid damage to the target, and the damage the target takes for taking grappling or maintaining a grapple increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level.
    