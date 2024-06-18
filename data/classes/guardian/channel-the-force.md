---
level: 1
name: Channel the Force
mechanics:
- bonus:
    type: multiple
    value:
    - ceil: false
      min: 1
      multiplier: 0.5
      type: level
      value: guardian
    - type: powercastingMod
      value: guardian
  label: 'Channel the Force: guardian'
  limit: points
  type: power-resource-recovery
- shortDesc: placeholder
  type: action
- limit: guardian
  reset: long
  type: limit
---
_**Guardian:** 1st level_
You know how to channel the Force to create a unique effect. You start with your choice of one from two such effects: Cause Harm or Lend Aid. At 3rd level, your Guardian Focus grants you an additional effect. When you use your Channel the Force, you choose which effect to create.
Some Channel the Force effects require saving throws. When you use such an effect from this class, the DC equals your universal force save DC.
You can use this feature twice. You gain an additional use at 5th, 9th, 13th, and 17th level. You regain all expended uses when you finish a short or long rest.
#### Cause Harm
As an action, you can expend a use of your Channel the Force to sap the life from a hostile creature you can see within 60 feet. That creature must make a Constitution saving throw. On a failed save, the creature takes necrotic damage equal to your guardian level + your Charisma modifier (minimum of +1), or half as much on a successful one.
#### Lend Aid
As a bonus action, you can expend a use of your Channel the Force and touch a beast or humanoid within 5 feet of you. That creature regains hit points equal to your guardian level + your Wisdom modifier (minimum of +1). Alternatively, if the beast or humanoid is poisoned or diseased, you neutralize the poison or disease. If more than one poison or disease afflicts the target, you neutralize one poison or disease that you know is present, or you neutralize one at random.