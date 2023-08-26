---
name: Ring of Fire
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
      save: wis
    damage:
      - dieCount: 1
        dieType: 6
        type: fire
    duration:
      length: 1
      unit: minute
    range:
      short: self
    concentration: true
---
A wall of flames erupts out of the ground in a ring around you with a radius of 15 feet and a height of 10 feet. Creatures who start their turn in the ring of fire or pass through it on their turn take 1d6 fire damage. Creatures within the ring of fire who willingly try to move through the fire to escape must succeed on a Wisdom saving throw to do so. Creatures who are immune to fear or fire automatically succeed on this saving throw. 

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, the damage of the ring of fire increases by 1d6 for each slot level above 1st.
    