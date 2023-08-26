---
name: Bestow Curse
version: 1
level: 3
alignment: dark
prerequisite: Curse
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
      save: wis
    damage:
      - dieCount: 1
        dieType: 8
        type: necrotic
    duration:
      length: 1
      unit: minute
    range:
      short: Touch
    concentration: true
---
You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the power. When you cast this power, choose the nature of the curse from the following options:
- Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score.
- While cursed, the target has disadvantage on attack rolls against you.
- While cursed, the target must make a Wisdom saving throw at the start of each of its turns. lf it fails, it wastes its action that turn doing nothing.
- While the target is cursed, your attacks and powers deal an extra 1d8 necrotic damage to the target.

A remove curse power ends this effect. At the GM's discretion, you may choose an alternative curse effect, but it should be no more powerful than those described above. The GM has final say on such a curse's effect. This power has no effect on droids or constructs.

***__At Higher Levels__:*** If you cast this power using a force slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a force slot of 5th Level or higher, the duration is 8 hours. If you use a force slot of 7th level or higher, the duration is 24 hours. If you use a 9th level force slot, the power lasts until it is dispelled. Using a force slot of 5th Level or higher grants a duration that doesn't require concentration.
    