---
level: 3
mechanics:
  - type: bonus-action
    resource: {}
    toggle:
      id: assault-hunter-mode
      whenOn:
        - type: speed-bonus
          value: [walk]
          bonus:
            type: flat
            value: 5
        - type: attack-augment
          augmentTypes: [damage]
          bonus:
            type: powercastingMod
            value: guardian
    shortDesc: >-
      As a bonus action, for one minute, you add your Wisdom or Charisma modifier (your choice) to the first melee weapon attack and damage rolls you make each turn.
name: the-way-of-the-ysalamiri
---
_**Makashi Form:** 3rd level_

As a bonus action, you can enter an offensive stance for one minute. While in this stance, you add your Wisdom or Charisma modifier (your choice) to the first melee weapon attack and damage rolls you make each turn.

This effect ends early if you are incapacitated or die. Once you've used this feature, you can't use it again until you finish a long rest.