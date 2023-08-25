---
name: Skill Empowerment
version: 1
level: 5
alignment: light
prerequisite: 
type: force
tags:
  - damage
classes:
  - force
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
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: Touch
    concentration: true
---
Your power with the Force deepens a creature's understanding of its own talent. You touch one willing creature and give it expertise in one skill of your choice; until the power ends, the creature doubles its proficiency bonus for ability checks it makes that use the chosen skill.

You must choose a skill in which the target is proficient and that isn't already benefiting from an effect, such as Expertise, that doubles its proficiency bonus.
    