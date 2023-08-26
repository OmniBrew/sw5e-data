---
name: Spectrum Bolt
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
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 2
        dieType: 8
        type: extra
    duration:
      length: 0
      unit: instant
    range:
      short: 120
    concentration: false
---
You fire an undulating, warbling bolt of energy at a creature within range. Make a ranged tech attack against the target. On a hit, the target takes 2d8 + 1d6 damage. Choose one of the d8s. The number rolled on that die determines the attacks damage type, as shown below.

| d8  | Damage Type |
|:---:|:-----------:|
|  1  | Acid |
|  2  | Cold |
|  3  | Fire |
|  4  | Energy |
|  5  | Ion |
|  6  | Lightning |
|  7  | Poison |
|  8  | Sonic |

If you roll the same number on both d8s, the bolt leaps from the target to a different creature of your choice within 30 feet of it. Make a new attack roll against the new target, and make a new damage roll, which could cause the bolt to leap again. A creature can be targeted only once by each casting of this power.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, each target takes 1d6 extra damage of the type rolled for each slot level above 1st.
    