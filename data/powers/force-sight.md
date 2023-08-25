---
name: Force Sight
version: 1
level: 2
alignment: universal
prerequisite: Sense Force
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
      unit: minute
    range:
      short: Self
    concentration: true
---
You shift your vision to see through use of the Force; colors fade and inanimate objects appear as shades of gray. For the duration, you gain the following benefits.
- Living things glow with the power of the Force. Those with an affinity for the light side glow blue, those with an affinity for the dark side glow red, and those with no attunement to either side of the Force glow yellow. How bright they glow is determined by how strong their connection to the Force is.
- You gain blindsight to 30 feet.
- You have advantage on Wisdom (Perception) checks that rely on sight against living targets within 30 feet.
    