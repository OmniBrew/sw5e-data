---
name: Telepathic Link
version: 1
level: 1
alignment: universal
prerequisite: Force Whisper
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
      proficient: True
    dc: false
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: Touch
    concentration: true
---
You establish a telepathic link with one willing creature you touch. Until the power ends, whenever you and the target can see each other, each of you can communicate with the other via telepathy.

You don't need to share a language with a creature for it to understand your telepathic utterances, and the creature understands you even if it lacks a language. The creature can respond to you telepathically as well, but it must understand at least one language in order to communicate this way. This power has no effect on droids or constructs.

***__At Higher Levels__:*** When you cast this power using a force slot of 3rd level or higher, the duration increases to concentration, up to 1 hour, and if either you or the creature you are linked to are surprised while the other isn't, and both of you can see each other, the surprised creature can still act normally on its first turn in combat, as if it were not surprised.
    