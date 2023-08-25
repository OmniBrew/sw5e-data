---
name: Friendly Fire
version: 1
level: 5
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
      save: int
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 120
    concentration: true
---
You scramble the targeting protocols of nearby machines. Each droid or construct in a 30-foot-radius sphere centered on a point you choose within range must make an Intelligence saving throw. If a construct has the 'Piloted' trait, and has a pilot controlling it that is not incapacitated, it gains a bonus to the saving throw equal to the pilot's Intelligence modifier. On a failed save, the target loses the ability to distinguish friend from foe, regarding all creatures it can see as enemies until the power ends. Each time the target takes damage, it can repeat the saving throw, ending the effect on itself on a success.

Whenever the affected creature chooses another creature as a target, it must choose the target at random from among the creatures it can see within range of the attack, power, or other ability it�s using. If an enemy provokes an opportunity attack from the affected creature, the creature must make that attack if it is able to.
    