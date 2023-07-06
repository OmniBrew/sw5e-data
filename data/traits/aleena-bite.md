---
name: Bite
species:
  - aleena
mechanics:
  - type: natural-weapon
    value:
      type: natural-melee
      replacesUnarmedStrike: true
      value:
        damageModOverride: noMod
        name: Unarmed Strike / Bite
        type: natural-melee
        range:
          short: 5
        damage:
          dieCount: 1
          dieType: 4
          type: kinetic
        moreInfo:
          model: traits
          id: aleena-bite
  - type: bonus-action
    name: Bite
    resource:
      reset: short
    range:
      short: 5
    damage:
      - dieCount: 1
        dieType: 4
        type: kinetic
    shortDesc: >-
      Gain {{ conMod }} temporary hit points.
---
Your sharp teeth are a natural weapon, which you can use to make unarmed strikes. Additionally,
your unarmed strikes deal 1d4 kinetic damage. Lastly, as a bonus action, you can perform a
special bite attack. On a hit, the target suffers the attack’s normal effects, you gain
temporary hit points equal to your Constitution modifier (minimum of 1), and you can’t use this
trait again until you finish a short or long rest.
