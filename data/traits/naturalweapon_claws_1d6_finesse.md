---
name: Dexterious Claws
species:
  - cathar
mechanics:
  - type: natural-weapon
    value:
      type: natural-melee
      replacesUnarmedStrike: true
      value:
        damageModOverride: noMod
        name: Unarmed Strike / Claw
        type: natural-melee
        range:
          short: 5
        damage:
          dieCount: 1
          dieType: 6
          type: kinetic
        moreInfo:
          model: traits
          id: finesse-claw
---
Your unarmed strikes deal 1d6 kinetic damage and have the finesse property.