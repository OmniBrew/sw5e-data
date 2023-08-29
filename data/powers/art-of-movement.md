---
name: Art of Movement
version: 1
level: 3
alignment: universal
prerequisite: instinctive movement
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
      - dieCount: 1
        dieType: 10
        type: force
    duration:
      length: 1
      unit: minute
    range:
      short: self
    concentration: true
---
By letting the Force flow through you, you move with preternatural grace, leaping onto or over tall obstacles that impede others. Until the power ends, you gain the following benefits:
- Your speed increases by 10 feet.
- You have resistance to damage from falling.
- Your jumping distance is tripled.
- You gain a climbing speed equal to your walking speed, and you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. If you are on a vertical surface when you end your turn and are not using your hands to climb, you immediately fall unless you have some other means of remaining there.
- Your movement is unaffected by difficult terrain or squeezing.
- You ignore the effects of slowed levels under 3.

Once before the power ends, you can give yourself advantage on one weapon attack roll on your turn. That attack deals an extra 1d10 force damage on a hit. Whether you hit or miss, you gain a flying speed equal to your walking speed until the end of that turn.
    