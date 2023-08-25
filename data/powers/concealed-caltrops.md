---
name: Concealed Caltrops
version: 1
level: 2
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
      save: wis
    damage:
      - dieCount: 2
        dieType: 4
        type: kinetic
    duration:
      length: 1
      unit: round
    range:
      short: 150
    concentration: true
---
You scatter a large number of caltrops across ground in a 20-foot radius centered on a point within range. These caltrops pierce deep into the feet and boots of anyone who walks upon them. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 kinetic damage for every 5 feet it travels.

The caltrops are nearly invisible to the naked eye. Any creature that can't see the area at the time the power is cast must make a Wisdom (Perception) check against your tech save DC to notice the caltrops before entering the area.
    