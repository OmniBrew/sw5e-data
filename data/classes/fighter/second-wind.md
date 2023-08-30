---
level: 1
name: Second Wind
mechanics:
  - type: bonus-action
    damage:
      - type: hp
        bonus:
          type: progressive
          limit: fighter
    shortDesc: >-
      Gain 1d10 + {{ fighter_level }} hit points. 
    resource:
      max:
        type: flat
        value: 1
---
_**Fighter:** 1st level_
You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.
Once you've used this feature, you must finish a short or long rest before you can use it again.