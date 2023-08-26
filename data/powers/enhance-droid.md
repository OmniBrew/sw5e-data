---
name: Enhance Droid
version: 1
level: 2
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
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 2
        dieType: 6
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: Touch
    concentration: true
---
You touch a droid or construct and upgrade one of its aspects. Choose one of the following effects; the target gains that effect until the power ends. 
- ***Servomotor.*** The target has advantage on Strength checks, and its carrying capacity doubles. 
- ***Motivator.*** The target has advantage on Dexterity checks. It also doesn't take damage from falling 20 feet or less if it isn't incapacitated. 
- ***Power Core.*** The target has advantage on Constitution checks. It also gains 2d6 temporary hit points, which are lost when the power ends. 
- ***Databanks.*** The target has advantage on Intelligence checks. 
- ***Sensors.*** The target has advantage on Wisdom checks. 
- ***Relations Protocols.*** The target has advantage on Charisma checks. 

***__At Higher Levels__:*** When you cast this power using a tech slot of 3rd level or higher, you can target one additional droid or construct for each slot level above 2nd.
    