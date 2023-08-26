---
name: Disperse Force
version: 1
level: 1
alignment: universal
prerequisite: Saber Ward
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
      unit: reaction
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
      unit: round
    range:
      short: Self
    concentration: false
---
This power absorbs damage from certain incoming attacks, lessening its effect on you and distributing it throughout your body. You have resistance to the triggering damage type until the start of your next turn. Also, you gain 5 temporary hit points to potentially absorb the attack. These temporary hit points last until the start of your next turn.

***__At Higher Levels__:*** When you cast this power using a force slot of 2nd level or higher, the temporary hit points increases by 5 for each slot level above 1st.
    