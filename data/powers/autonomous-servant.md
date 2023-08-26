---
name: Autonomous Servant
version: 1
level: 3
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
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 4
        dieType: 4
        type: unknown
    duration:
      length: 0
      unit: instant
    range:
      short: touch
    concentration: false
---
You touch one Tiny, unenhanced object that isn't attached to another object or a surface and isn't being carried by another creature. The target animates and gains little arms and legs, becoming a creature under your control until the power ends or the creature drops to 0 hit points. See the stat block for its statistics. 

___
> ## Servant
>*Tiny construct, unaligned*
> ___
> - **Armor Class** 15 (natural armor)
> - **Hit Points** 10 (4d4)
> - **Speed** 30 feet, climb 30 feet
>___
>|STR|DEX|CON|INT|WIS|CHA|
>|:---:|:---:|:---:|:---:|:---:|:---:|
>|4 (-3)|16 (+3)|10 (+0)|2 (-4)|10 (+0)|1 (-5)|
>___
> - **Damage Vulnerabilities** ion
> - **Damage Resistances** necrotic, poison, psychic
> - **Condition Immunities** charmed, deafened, exhaustion, poisoned
> - **Senses** blindsight 60 feet (blind beyond this radius), passive Perception 10
> - **Languages** �
> ___
> **Circuitry.** The construct has disadvantage on saving throws against effects that would deal ion or lightning damage.
> ### Actions
> ***Slam.*** *Melee Weapon Attack:* +4 to hit, reach 5 feet, one target. *Hit* 5 (1d4 + 3) kinetic damage.

As a bonus action, you can nonverbally command the creature if it is within 120 feet of you. (If you control multiple creatures with this power, you can command any or all of them at the same time, issuing the same command to each one.) You decide what action the creature will take and where it will move during its next turn, or you can issue a simple, general command, such as to fetch a code cylinder, stand watch, or stack some small objects. If you issue no commands, the servant does nothing other than defend itself against hostile creatures. Once given an order, the servant continues to follow that order until its task is complete.

When the creature drops to 0 hit points, it reverts to its original form, and any remaining damage carries over to that form.

The creature is considered a valid target for the *tracker droid interface* power.

***__At Higher Levels__:*** When you cast this power using a tech slot of 4th level or higher, you can animate two additional objects for each slot level above 3rd.
    