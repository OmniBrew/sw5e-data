---
name: Improved Feedback
version: 1
level: 1
alignment: dark
prerequisite: Feedback
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
      save: int
    damage:
      - dieCount: 3
        dieType: 6
        type: psychic
    duration:
      length: 0
      unit: instant
    range:
      short: 60
    concentration: false
---
You unleash a blast of psychic energy at a target within range. If the target can hear you (though it need not understand you), it must succeed on an Intelligence saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn't move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn't have to move away. A deafened creature automatically succeeds on the save.

***__At Higher Levels__:*** When you cast this power using a force slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.
    