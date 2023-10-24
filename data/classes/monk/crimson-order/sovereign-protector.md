---
level: 17
mechanics:
  - type: bonus-action
    resource: {}
    toggle:
      id: sovereign-protector
      whenOn:
        - type: speed-bonus
          value: [walk]
          bonus:
            type: flat
            value: 30
        - type: ac
          bonus: 
            type: flat
            value: 2            
        - type: attack-augment
          attackLimit:
            type: melee
            model: weapon
          augmentTypes: [hit]
          bonus:
            type: flat
            value: 1
        - type: extra-attack-add
    shortDesc: >-
      As a bonus action, you can gain the following effects for 1 minute. Your speed is doubled. Your AC increases by 2. You have advantage on Dexterity saving throws. You gain an additional action of each of your turns. This action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.
name: sovereign-protector
---
_**Crimson Order:** 17th level_

Your mastery of focus has allowed you to unlock your fullest potential in combat. As a bonus action, you can gain the following effects for 1 minute.

Your speed is doubled.
Your AC increases by 2.
You have advantage on Dexterity saving throws.
You gain an additional action of each of your turns. This action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.
This effect ends early if you are incapacitated or die. Once you’ve used this feature, you can’t use it again until you finish a long rest.