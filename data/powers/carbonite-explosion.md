---
name: Carbonite Explosion
version: 1
level: 9
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
      - dieCount: 8
        dieType: 6
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: 250
    concentration: false
---
You generate an explosion of cryogenic energy in a 60-foot-radius sphere centered on a point you can see 

within range. Each creature in the affected area must make a Constitution saving throw. On a failed save, the creature takes 8d6 + 20 cold damage and is restrained for 1 minute as it is encased in carbonite. On a successful save, the creature takes half damage and is restrained until the end of its next turn. 

As an action, a restrained creature can make a Strength check against your tech save DC, ending this effect on itself on a success.

A creature reduced to 0 hit points by this power dies instantly, as its body shatters into frozen chunks.
    