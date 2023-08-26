---
name: Tonal Translocate
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
      save: con
    damage:
      - dieCount: 3
        dieType: 10
        type: sonic
    duration:
      length: 0
      unit: instant
    range:
      short: 90
    concentration: false
---
You teleport yourself to an unoccupied space you can see within range. Immediately after you disappear, a thunderous boom sounds, and each creature within 10 feet of the space you left must make a Constitution saving throw, taking 3d10 sonic damage on a failed save, or half as much damage on a successful one. The blast can be heard from up to 300 feet away.

You can bring along objects as long as their weight doesn't exceed what you can carry. You can also teleport one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this power, and there must be an unoccupied space within 5 feet of your destination space for the creature to appear in; otherwise, the creature is left behind.

***__At Higher Levels__:*** When you cast this power using a tech slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd.
    