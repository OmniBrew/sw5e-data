---
name: Fabricate Trap
version: 1
level: 3
alignment: none
prerequisite: 
type: tech
tags:
  - damage
classes:
  - tech
mechanics:
  - castingTime:
      length: 1
      unit: hour

    dc:
      save: int
    damage:
      - dieCount: 5
        dieType: 8
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: Touch
    concentration: false
---
When you cast this power, you create a trap that will later trigger in response to a certain condition. You must attach it either to a surface (such as a table or a section of floor or wall) or within an object that can be closed or turned on (such as a book, door, or computer terminal) to conceal the trap. The trap can cover an area no larger than 10 feet in diameter. At the GM's discretion, certain actions may cause the trap to break or be rendered inoperative.

The trap is well disguised, and generally and requires a successful Intelligence (Investigation) check against your tech save DC to be found.

You decide what triggers the trap when you cast the power, such as entering a certain area or powering on the object. You can further refine the trigger so the trap activates only under certain circumstances or according to physical characteristics (such as height or weight) or creature kind (for example, the trap could be set to go off only droids or gungans). You can also set conditions for creatures that don't trigger the trap, such as those who say a certain password.

You may only have one instance of this trap active at a time. If you cast another trap before the previous one is triggered, the other trap becomes inert.

When you create the trap, choose an explosive trap or a power trap:

***Explosive Trap.*** When triggered, the trap erupts in a 20-foot-radius sphere centered on the trap. The explosion spreads around corners. Each creature in the area must make a Dexterity saving throw. A creature takes 5d8 acid, cold, fire, lightning, or sonic damage on a failed saving throw (your choice when you create the trap), or half as much damage on a successful one.

***Power Trap.*** You can store a prepared tech power of 3rd level or lower in the trap by casting it as part of creating the trap. The trap must target a single creature or an area. The power being stored has no immediate effect when cast in this way. When the trap is triggered, the stored power is cast. If the trap has a target, it targets the creature that triggered the trap. If the power affects an area, the area is centered on that creature. If the power requires concentration, it lasts until the end of its full duration.

***__At Higher Levels__:*** When you cast this power using a tech slot of 4th level or higher, the damage of an explosive trap increases by 1d8 for each slot level above 3rd. If you create a power trap, you can store any power of up to the same level as the slot you use for this power.
    