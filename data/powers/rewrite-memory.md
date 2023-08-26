---
name: Rewrite Memory
version: 1
level: 5
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
      save: wis
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
You attempt to alter a droid or construct's memories. One droid or construct that you can see must make a Wisdom saving throw. If you are fighting the creature, it has advantage on the saving throw. On a failed save, the target becomes charmed by you for the duration. The charmed target is incapacitated and unaware of its surroundings, though it can still hear you. If it takes any damage or is targeted by another power, this power ends, and none of the target's memories are modified.

While this charm lasts, you can affect the target's memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity and exacting detail, change its memory of the details of the event, or create a memory of some other event.

The target's mind fills in any gaps in the altered memory. If the power ends before you have finished prescribing the modified memories, the creature's memory isn't altered. Otherwise, the modified memories take hold when the power ends.

A modified memory doesn't necessarily affect how the target behaves, particularly if the memory contradicts the target's core programming, alignment, or beliefs. An illogical modified memory, such as implanting a memory of how much the target enjoyed dousing itself in acid, is dismissed, perhaps as a glitch. The DM might deem a modified memory too nonsensical to affect a target in a significant manner.

A *remove virus* or similar power cast on the target restores its true memory.

***__At Higher Levels__:*** If you cast this power using a tech slot of 6th level or higher, you can alter the target's memories of an event that took place up to 7 days ago (6th level), 30 days ago (7th level), 1 year ago (8th level), or any time in the creature's past (9th level).
    