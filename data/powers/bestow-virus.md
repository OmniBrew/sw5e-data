---
name: Bestow Virus
version: 1
level: 3
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

    dc:
      save: int
    damage:
      - dieCount: 1
        dieType: 8
        type: lightning
    duration:
      length: 1
      unit: minute
    range:
      short: touch
    concentration: true
---
You touch a droid, construct, or a creature with a tech focus, and it must succeed on an Intelligence saving throw or receive a tech-based curse for the duration of the power. When you cast this power, choose the nature of the curse from the following options:
- Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score.
- While cursed, the target has disadvantage on attack rolls against you.
- While cursed, the target must make an Intelligence saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing.
- While the target is cursed, your attacks and powers deal an extra 1d8 lightning damage to the target.

A *remove virus* power ends this effect. At the GM's discretion, you may choose an alternative curse effect, but it should be no more powerful than those described above. The GM has final say on such a curse's effect.

**__At Higher Levels__:** If you cast this power using a tech slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a tech slot of 5th level or higher, the duration is 8 hours. If you use a tech slot of 7th level or higher, the duration is 24 hours. If you use a 9th-level tech slot, the power lasts until it is dispelled. Using a tech slot of 5th level or higher grants a duration that doesn't require concentration.
    