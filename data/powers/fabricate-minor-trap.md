---
name: Fabricate Minor Trap
version: 1
level: 1
alignment: none
prerequisite: 
type: tech
tags:
  - damage
classes:
  - engineer
  - operative
  - scout
  - shield
mechanics:
  - castingTime:
      length: 1
      unit: minute

    dc:
      save: wis
    damage:
      - dieCount: 2
        dieType: 10
        type: energy
    duration:
      length: 0
      unit: instant
    range:
      short: Self
    concentration: false
---
You ward a 30-foot radius sphere centered on you with a manually-operated trap. The trap is well disguised. Any creature that can’t see the area at the time the power is cast must make a Wisdom (Perception) check against your tech save DC to notice the trap before entering the area. Once after this power is cast, when a creature you can see enters or moves within the warded area, you can use your reaction to trigger the trap. The effect on the creature depends on the kind of trap you employ, which you choose when you cast this power. You can maintain a maximum number of instances of this power at once equal to your techcasting ability modifier.

***Blaster.*** This power creates a blaster turret which fires at the target when triggered. The creature must make a Dexterity saving throw. It takes 2d10 energy damage on a failed save, or half as much on a successful one.

***Pitfall.*** This power creates a 5-foot diameter, 15-foot deep pitfall in the ground beneath the creature when triggered, which must make a Dexterity saving throw. On a failed saving throw, the creature falls into the pitfall. On a success, the creature falls prone in a space within 5 feet of the pitfall. This pitfall cannot be created through manufactured terrain. Otherwise, the hole is well constructed and lasts even after the power's duration. Flying creatures avoid this trap.

***Snare.*** This power creates a snare of rope, wire, vine, or webs that entangle the creature. The creature must make a Strength saving throw. A Large or larger creature has advantage on this saving throw. On a failed save, the creature takes 1d6 kinetic damage and is restrained until the start of its next turn. On a success, the creature takes half as much damage and ends its movement.

***__At Higher Levels__:*** When you cast this power using a tech slot of 2nd level or higher, the effects increase, based on the trap.
*Blaster.* The damage increases by 1d10 for each slot level above 1st. If cast using a slot of 3rd level or higher, this power targets creatures in a sphere centered on the triggering creature within the warded area, the radius of which is 5 feet for every two slot levels above 1st.
*Pitfall.* The depth of the pitfall increases by 5 feet for each slot level above 1st. If cast using a slot of 3rd level or higher, the diameter of the pit is 5 feet wider for every two slot levels above 1st.
*Snare.* The damage increases by 1d6 for each slot level above 1st. If cast using a slot of 3rd level or higher, Large creatures no longer have advantage on their saving throw. This size category increases for every two slot levels above 1st.
    