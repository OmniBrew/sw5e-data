---
name: Electromesh
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

    dc:
      save: dex
    damage:
      - dieCount: 2
        dieType: 4
        type: fire
    duration:
      length: 1
      unit: round
    range:
      short: 60
    concentration: true
---
You expel a mass of thick, adhesive mesh at a point of your choice within range. The mesh fill a 20-foot cube from that point for the duration. The mesh is difficult terrain and lightly obscures their area.

If the mesh isn't anchored between two solid masses (such as walls) or layered across a floor, wall, or ceiling, the electromesh collapses on itself, and the power ends at the start of your next turn. Mesh layered over a flat surface has a depth of 5 feet.

Each creature that starts its turn in the mesh or that enters it during its turn must make a Dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the mesh or until it breaks free.

A creature restrained by the mesh can use its action to make a Strength check against your tech save DC. If it succeeds, it is no longer restrained.

The mesh is flammable. Any 5-foot cube of electromesh exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire.
    