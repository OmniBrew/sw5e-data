---
name: Whirlwind
version: 1
level: 7
alignment: universal
prerequisite: 
type: force
tags:
  - damage
classes:
  - consular
  - guardian
  - sentinel
  - adept
  - beguiler
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: dex
    damage:
      - dieCount: 10
        dieType: 6
        type: kinetic
    duration:
      length: 1
      unit: minute
    range:
      short: 300
    concentration: true
---
A whirlwind howls down to a point that you can see on the ground within range. The whirlwind is a 10-foot-radius, 30-foot-high cylinder centered on that point. Until the power ends, you can use your action to move 

the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren't secured to anything and that aren't worn or carried by anyone.

A creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or that the whirlwind enters its space, including when the whirlwind first appears. A creature takes 10d6 kinetic damage on a failed save, or half as much damage on a successful one. Additionally, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become restrained in the whirlwind until the power ends. When a creature starts its turn restrained by the whirlwind, the creature is pulled 5 feet higher inside it, unless the creature is at the top. A restrained creature moves with the whirlwind and falls when the power ends, unless the creature has some means to stay aloft.

A restrained creature can use an action to make a Strength or Dexterity check against your force save DC. If successful, the creature is no longer restrained by the whirlwind and is hurled 3d6x10 feet away from it in a random direction.
    