---
name: Delayed Detonator
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
      save: dex
    damage:
      - dieCount: 1
        dieType: 8
        type: fire
    duration:
      length: 1
      unit: round
    range:
      short: 60
    concentration: false
---
Choose a point you can see within range. You launch a detonator at that point, which remains there until the start of your next turn, when it explodes, ending the power. You can also use your reaction at any point during the power's duration to cause the detonator to explode early. When the detonator explodes, each creature within 5 feet of the point must make a Dexterity saving throw. A creature takes 1d8 fire damage and 1d8 kinetic damage on a failed save, or half as much damage on a successful one.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, you can launch an additional detonator at another point you can see within range for each slot level above 1st. The detonators all explode simultaneously. A creature in the area of more than one detonator when they explode is only affected once.
    