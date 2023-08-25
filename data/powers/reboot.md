---
name: Reboot
version: 1
level: 0
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
      save: cha
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
Choose a Medium or smaller droid or construct you can see. The target must make a Charisma saving throw. On a failed save, it is incapacitated until the start of your next turn. Each time the creature takes damage or is the target of a hostile power while incapacitated in this way, it can repeat this saving throw, ending the effect on a success.
    