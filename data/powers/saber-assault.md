---
name: Saber Assault
version: 1
level: 1
alignment: universal
prerequisite: Saber Ward
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: none

    dc:
      save: dex
    damage:
      - dieCount: 1
        dieType: 6
        type: kinetic
    duration:
      length: 1
      unit: round
    range:
      short: Self
    concentration: false
---
The first time you take the Attack action during your turn, you can simultaneously cast this power to blend your melee weapon attacks with the use of the Force. For each successful hit you make with a melee weapon before the power ends, the target must make a Dexterity saving throw or have a new effect apply until the end of its next turn. Once you've made three weapon attacks, the power ends.

- **1st Hit:** If the target fails its saving throw, it gains 1 slowed level until the end of its next turn.
- **2nd Hit:** If the target fails its saving throw, it takes 1d6 kinetic damage and cannot take reactions until after the end of its next turn.
- **3rd Hit:** If the target fails its saving throw, it takes 2d6 kinetic damage and cannot take bonus actions during its next turn.

***__At Higher Levels__:*** When you cast this power using a force slot of 3rd level or higher, the damage of the second and third hit each increase by 1d6 for every two slot levels above 1st.
    