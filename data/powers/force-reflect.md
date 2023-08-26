---
name: Force Reflect
version: 1
level: 1
alignment: universal
prerequisite: saber reflect
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
      proficient: true
    dc: false
    damage:
      - dieCount: 1
        dieType: 10
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: self
    concentration: false
---
In response to being attacked, you attempt to deflect the attack with the Force. When you use this power, the damage you take from the attack is reduced by 1d10. If you reduce the damage to 0 and the damage is energy, force, ion, kinetic, lightning, necrotic, or sonic, you can reflect the attack at a target within range as part of the same reaction. Make a ranged force attack at a target you can see. The attack has a normal range of 30 feet and a long range of 90 feet. On a hit, the target takes the triggering attack's normal damage.

***__At Higher Levels__:*** When you cast this power using a force slot of 2nd level or higher, the damage reduction increases by 1d10 for each slot level above 1st.
    