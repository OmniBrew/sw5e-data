---
name: Execute Command
version: 1
level: 1
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
      unit: action

    dc:
      save: int
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: 60
    concentration: false
---
You dictate a one-word command to a droid or construct you can see within range. The target must succeed on an Intelligence saving throw or follow the command on its next turn. If the construct has the 'Piloted' trait, and has a pilot controlling it that is not incapacitated, it gains a bonus to the saving throw equal to the pilot's Intelligence modifier. Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the GM determines how the target behaves. If the target can't follow your command, the power ends.

***Approach.*** The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.

***Deactivate.*** The target falls prone and then ends its turn.

***Drop.*** The target drops whatever it is holding and then ends its turn.

***Flee.*** The target spends its turn moving away from you by the fastest available means.

***Halt.*** The target doesn't move and takes no actions. A flying target stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, you can affect one additional droid or construct for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.
    