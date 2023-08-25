---
name: Instinctive Movement
version: 1
level: 1
alignment: universal
prerequisite: Wall Run
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
      - dieCount: 1
        dieType: 4
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: Self
    concentration: false
---
You enhance your movement with the Force, allowing you to traverse your environment with speed and acrobatic grace. When you cast this power, you gain two speed points. When you cast the power and as a bonus action on subsequent turns, you can expend a speed point, granting yourself all of the following benefits until the end of that turn:
- Your speed increases by 5 feet. 
- You have resistance to falling damage. 
- You ignore difficult terrain. 
- You have a climb speed equal to your walking speed. 
- You add 10 feet to your long jump distance and 3 feet to your high jump distance. 
- You can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. 
- You do not sink when moving over soft or brittle terrain, such as dust, silt, mud, snow, or thin ice. This effect does not allow you to move across liquid surfaces.
- If you move at least 20 feet straight toward a creature and then hit it with a melee weapon attack for the first time on the same turn, you deal an extra 1d4 damage with that attack.

At the end of the turn, the benefits fade entirely until you spend another speed point. If these benefits end while you are still on a vertical surface, or anywhere else where you would normally fall or sink, you immediately fall or begin to sink unless you have some other means to remain there. 

This power ends when its duration expires, when you cast this power again, or when you have spent all your speed points. When the power ends, any unspent speed points are lost.

***__At Higher Levels__:*** When you cast this power using a force slot of 2nd level or higher, the extra damage increases by 1d4 for each slot level above 1st. In addition, if you cast this power with a force slot of 3rd level or higher, you gain one additional speed point for every two slot levels above 1st.
    