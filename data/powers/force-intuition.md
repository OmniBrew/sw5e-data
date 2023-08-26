---
name: Force Intuition
version: 1
level: 1
alignment: universal
prerequisite: 
type: force
tags:
  - damage
classes:
  - consular
  - guardian
  - sentinel
  - adept
  - beguiler
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 8
      unit: round
    range:
      short: self
    concentration: false
---
Your senses attune to your environment for the duration, allowing you to see things before they happen, and react even faster than normal. For the duration, you can use your forcecasting ability modifier in place of your Dexterity modifier when you make initiative checks, if the check doesn't already include that modifier. 

In addition, once during the duration of this power, if you are surprised at the start of combat, rather than being completely unable to act, you can still use a reaction, and take an action on your first turn in combat. This action can be used only to take one of the following actions: Dash, Disengage, Dodge, Hide, or Use an Object.
    