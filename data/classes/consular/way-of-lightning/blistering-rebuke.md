---
level: 17
mechanics:
  - type: reaction
    name: 'Blistering Rebuke'
    dc:
      base: 8
      proficient: true
      bonus:
        type: powercastingMod
        value: consular
    damage:
    - dieCount: 1
      dieType: 10
      type: lightning
    bonus:
      type: level
      value: consular
      multiplier: 1
    resource: {}
    shortDesc:  When you are hit by a creature within 5 feet of you, at the cost of your reaction, they must make a Dex save (DC {{ dc }}) or they take 1d10plus your consular level lightning damage, is pushed back 10 feet, and becomes *shocked* until the end of their next turn. On a successful save, the creature takes half as much damage and isn't moved or *shocked*.
name: blistering-rebuke
---
_**Way of Lightning:** 10th, 13th, and 17th level_

When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw against your universal force save DC. On a failed save, the creature takes 1d10 plus your consular level lightning damage, is pushed back 10 feet, and becomes *shocked* until the end of their next turn. On a successful save, the creature takes half as much damage and isn't moved or *shocked*.

You can use this feature four times. You gain an additional use at 13th and 17th level. You regain all expended uses when you finish a long rest.