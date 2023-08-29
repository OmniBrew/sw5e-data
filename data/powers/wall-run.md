---
name: Wall Run
version: 1
level: 0
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
      unit: bonus_action
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
      length: 1
      unit: round
    range:
      short: self
    concentration: false
---
Until the end of the turn, you have a climbing speed equal to your walking speed and you have advantage on Dexterity (Acrobatics) and Strength (Athletics) checks that involve movement. For the same duration, you can move up, down, and across vertical surfaces while leaving your hands free. This does not allow you to move upside down along ceilings. If you are on a vertical surface when you no longer have a climbing speed, you immediately fall unless you have some other means of remaining there.
    