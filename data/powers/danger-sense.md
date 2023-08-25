---
name: Danger Sense
version: 1
level: 2
alignment: universal
prerequisite: 
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: bonusaction
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
      length: 0
      unit: instant
    range:
      short: Self
    concentration: false
---
You put your faith in the Force, feeling out the future and seeing whether your actions will lead to fortune or ruin. The GM chooses from the following possible omens:
- **Peace**, for results which are not dangerous
- **Danger**, for results which are dangerous but perhaps still worth the danger
- **Ruin**, for results which are certain to end in death or tragedy

The power doesn't take into account any possible circumstances that might change the outcome, such as the use of additional powers or the loss or gain of a companion.

If you use this power two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a neutral result regardless of the actual outcome.
    