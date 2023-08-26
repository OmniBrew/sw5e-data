---
name: Time Bomb
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
      save: str
    damage:
      - dieCount: 2
        dieType: 6
        type: kinetic
    duration:
      length: 1
      unit: minute
    range:
      short: Touch
    concentration: true
---
Make a melee tech attack against a target you touch. On a miss, this power ends. On a hit, you deal 2d6 kinetic damage as you plant an explosive charge on the target's body. You can then detonate the charge as a bonus action, which ends this power. It deals 1d8 fire damage if detonated on the same turn. It deals 2d8 fire damage on your next turn, increasing by 1d8 for each round you do not detonate it, to a maximum of 6d8. If this power ends before you detonate the charge, the target takes no fire damage.

A creature affected by this power can use an action to attempt to remove the detonator from its person, making a Strength or Dexterity check (the creature chooses the ability to use) against your tech save DC. On a success, this power ends, as the detonator deactivates harmlessly.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, the kinetic damage increases by 1d6 for each slot level above 1st.
    