---
name: Insanity
version: 1
level: 5
alignment: dark
prerequisite: Horror
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: wis
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
This power assaults and twists creatures' minds, spawning delusions and provoking uncontrolled action. Each creature in a 30-foot-radius sphere centered on you must succeed on a Wisdom saving throw when you cast this power or be affected by it.

An affected target can't take reactions and must roll a d8 at the start of each of its turns to determine its behavior for that turn. This power has no effect on constructs or droids.

|d8|Behavior|
|:--:|:--|
|1| The creature uses all its movement to move in a random direction. To determine the direction, roll a d8 and assign a direction to each die face. The creature doesn't take an action this turn.|
|2-6| The creature doesn't move or take actions this turn.|
|7-8|The creature uses its action to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, the creature does nothing this turn.|

At the end of each of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target.

***__At Higher Levels__:*** When you cast this power using a power slot of 6th level or higher, the radius of the sphere increases by 5 feet for each force slot level above 5th.
    