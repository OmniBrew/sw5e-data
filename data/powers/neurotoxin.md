---
name: Neurotoxin
version: 1
level: 7
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
      unit: bonusaction

    dc:
      save: con
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 30
    concentration: false
---
You release a series of darts filled with neurotoxin. Choose any number of creatures you can see within range. Each creature  must make a Constitution saving throw. On a failed save, a creature suffers an effect based on its current hit points:

- 60 hit points or fewer: poisoned for 1 minute
- 50 hit points or fewer: poisoned and deafened for 1 minute
- 40 hit points or fewer: poisoned, deafened, and blinded for 10 minutes
- 30 hit points or fewer: poisoned, blinded, deafened, and stunned for 1 hour
- 20 hit points or fewer: killed instantly

This power has no effect on droids or constructs.
    