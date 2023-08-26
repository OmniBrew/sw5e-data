---
name: Psychometry
version: 1
level: 3
alignment: universal
prerequisite: Telemetry
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
      unit: minute
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
      short: Self
    concentration: false
---
For the duration, you gain the ability to "communicate" telepathically with inanimate objects you touch. You can ask up to five questions and receive answers from objects, usually in the form of an auditory or visual hallucination. For example, touching the rusted, broken remains of a lightsaber and asking how it got there may result in a brief vision of a disgruntled Jedi Knight casting it to the ground on that spot. An object "questioned" in this way can only provide information relating to its past. The DM has the final say on what objects can be questioned, and to what extent.
    