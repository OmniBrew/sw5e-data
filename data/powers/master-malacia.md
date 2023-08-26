---
name: Master Malacia
version: 1
level: 6
alignment: universal
prerequisite: Mass Malacia
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
Choose one creature that you can see within range. The creature reels with extreme dizziness and nausea for the duration. Creatures that can't be charmed are immune to this power.

The affected creature must use all of its movement to writhe in discomfort without leaving its space and has disadvantage on Dexterity saving throws and attack rolls. While the target is affected by this power, other creatures have advantage on attack rolls against it. As an action, an affected creature makes a Wisdom saving throw to regain control of itself. On a successful save, the power ends. This power has no effect on droids or constructs.
    