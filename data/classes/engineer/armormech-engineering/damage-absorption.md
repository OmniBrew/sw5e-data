---
level: 3
mechanics:
  - type: global-note
    subType: defense
    value: damage-absorption
    moreInfo:
      model: class-features
      id: engineer.armormech-engineering.damage-absorption
  - type: reaction
    name: Damage Absorption
    damage:
      - dieCount: 1
        dieType:
          type: progressive
          value:
            1: 4
            5: 6
            9: 8
            13: 10
            17: 12
          bonus:
            type: mod
            value: int
        label: 'Potent Aptitude'
    shortDesc: >-
      When you take damage, you can use your reaction and expend one use of your Potent Aptitude to absorb some of that damage. When you do so, the damage you take from the attack is reduced by the amount rolled on the die + your Intelligence modifier (minimum of +1).
name: damage-absorption
---
_**Armormech Engineering:** 3rd level_

When you take damage, you can use your reaction and expend one use of your Potent Aptitude to absorb some of that damage. When you do so, the damage you take from the attack is reduced by the amount rolled on the die + your Intelligence modifier (minimum of +1). You must be wearing your modified armor or wielding your modified shield to gain this benefit.