---
name: Defensive Technique
version: 1
level: 0
alignment: light
prerequisite: 
type: force
tags:
  - damage
classes:
  - consular
  - guardian
  - sentinel
  - adept
  - beguiler
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
        dieType: 6
        type: psychic
    duration:
      length: 1
      unit: round
    range:
      short: varies
    concentration: false
---
As part of the action used to cast this power, you must make a melee weapon attack against one creature within your reach, otherwise the power fails. On a hit, the target suffers the attack's normal effects, and you ward yourself from it through the Force.

If the target forces you to make a saving throw before the start of your next turn, the target takes an additional 1d6 psychic damage, and you can roll 1d4 and add the number rolled to your saving throw. The power then ends.

The power's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d6 psychic damage to the target, and the psychic damage the target takes for forcing you to make a saving throw increases to 2d6. Both damage rolls increase by 1d6 at 11th level and 17th level.
    