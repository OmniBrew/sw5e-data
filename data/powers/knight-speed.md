---
name: Knight Speed
version: 1
level: 3
alignment: universal
prerequisite: Burst of Speed
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: dex
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 30
    concentration: true
---
Choose a willing creature that you can see within range. Until the power ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.

When the power ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it.
    