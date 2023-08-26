---
name: Mass Animation
version: 1
level: 5
alignment: universal
prerequisite: Animate Weapon
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
      proficient: True
    dc: false
    damage:
      - dieCount: 1
        dieType: 4
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 120
    concentration: true
---
You snag several objects using the Force and whip them into the air around you, controlling them to attack at your command. Choose up to ten unenhanced objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't control any object larger than Huge. Each object animates and hovers near you, remaining within 100 feet of you for the duration. An animated object behaves as though it is a construct, with AC, hit points, and attacks determined by its size, and a flying speed of 30 feet.

As a bonus action, you can mentally direct any object controlled by this power. If you control multiple objects, you can command any or all of them at the same time. You decide what action the object will take and where it will move. The objects act at the end of your turn. If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and kinetic damage determined by its size.

|Size|		HP|	AC|	Attack|
|:--|:--:|:--:|:--:|
|Tiny	|20|16|+6 to hit, 1d4 + 3 damage|
|Small	|25|15|+6 to hit, 1d8 + 2 damage|
|Medium	|40|13|+5 to hit, 2d6 + 1 damage|
|Large	|50|10|+6 to hit, 2d10 + 2 damage|
|Huge	|80|10|+8 to hit, 2d12 + 4 damage|

***__At Higher Levels__:*** If you cast this power using a force slot of 6th level or higher, you can animate two additional objects for each slot level above 5th.
    