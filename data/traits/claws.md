---
name: Claws
species:
  - trandoshan
    wookiee
    arcona
    dashade
    defel
    dowutin, young
    gormak
    rakata
    selkath
    taung
    thisspiasian
    togorian
    zygerrian
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
          dieType: 4
          type: kinetic
        moreInfo:
          model: traits
          id: finesse-claw
---
Your claws are natural weapons, which you can use to make unarmed strikes. Additionally, your unarmed strikes deal 1d4 kinetic damage.
