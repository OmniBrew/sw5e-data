---
name: Bacta Pack
version: 1
level: 1
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
        dieType: 6
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 60
    concentration: false
---
You create a luminescent pack of bacta in any space, occupied or unoccupied, within range. The pack remains in its space until it is activated by any creature you choose. If the space you choose is occupied by a creature you have designated, it can use its reaction to immediately activate the pack; otherwise, a creature within 5 feet of the pack can use a bonus action to touch it and activate it.

When the pack is activated by a designated creature, that creature regains hit points equal to 1d6 + your techcasting ability modifier, and the pack is consumed. If the power ends before the pack has been activated, it becomes useless and disintegrates. This power has no effect on droids or constructs.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, you may either increase the healing of a single pack by 1d6 for each slot level above 1st, or create another pack in a separate space, with one additional pack for each slot level above 1st.
    