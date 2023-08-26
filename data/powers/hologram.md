---
name: Hologram
version: 1
level: 1
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
      save: int
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 60
    concentration: true
---
You create an image that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual. If anything passes through it, it is revealed to be an illusion.

You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image.

A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your tech save DC. If a creature discerns the illusion for what it is, the creature can see through the image.
    