---
name: Dark Shear
version: 1
level: 2
alignment: dark
prerequisite: 
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: bonusaction
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 2
        dieType: 6
        type: psychic
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: true
---
You create a weapon of imperceptible Force energy that lasts until the power ends. It counts as a simple lightweapon with which you are proficient. It deals 2d6 psychic damage, and has the finesse, light, and thrown properties (range 20/60). When you attack while within dim light or darkness, you have advantage.

If you drop the weapon or throw it, it disappears at the end of the turn. While the power lasts, you can use a bonus action to make the weapon reappear in your hand.

***__At Higher Levels__:*** When you cast this power using a 3rd or 4th level force slot, the damage increases by 1d6 (3d6). At 5th or 6th level, the damage increases by 2d6 (4d6). At 7th level or higher, the damage increases by 3d6 (5d6). 
    