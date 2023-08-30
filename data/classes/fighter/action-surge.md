---
level: 2
name: Action Surge
mechanics:
  - type: other
    shortDesc: >-
      Take one additional action this turn on top of your regular action and a possible
      bonus action.
    resource:
      reset: short
      max:
        type: progressive
        limit: soldier
        value:
          2: 1
          17: 2
---
_**Fighter:** 2nd level_
You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action.
Once you've used this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.