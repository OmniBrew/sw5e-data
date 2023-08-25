---
name: Storming Shot
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
        dieType: 6
        type: lightning
    duration:
      length: 1
      unit: round
    range:
      short: Varies
    concentration: false
---
As a part of the action used to cast this power, you must make a ranged weapon attack against one creature within your weapon's range, otherwise the power fails. On a hit, the target suffers the attack's normal effects and becomes shocked until the end of your next turn. When this power hits a target, if there is a creature within 30 feet who is shocked, an arc of lightning courses between the two creatures, dealing 1d6 lightning damage to both of them. If there are multiple other creatures who are shocked, the lightning leaps to the closest creature.

The power's damage increases when you reach higher levels. At 5th level, the effects of both the ranged weapon attack and discharge deal an extra 1d6 lightning damage. Both damage rolls increase by an additional 1d6 at 11th and 17th level.
    