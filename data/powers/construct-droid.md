---
name: Construct Droid
version: 1
level: 2
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
      unit: minute

    dc:
      save: dex
    damage:
      - dieCount: 1
        dieType: 6
        type: fire
    duration:
      length: 1
      unit: round
    range:
      short: 10
    concentration: true
---
You construct a droid, which is deployed in an unoccupied space that you can see within range. This droid uses the Constructed Droid stat block. When you cast the power, choose a design: Probe, Pyro, or Battle. The droid resembles a Class IV droid, and the design determines certain traits in its stat block. The droid falls to pieces and disintegrates when it drops to 0 hit points or when the power ends.

The droid is an ally to you and your companions. In combat, the droid shares your initiative count, but it takes its turn immediately after yours. It obeys your commands you issue through your tech focus (no action required). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.

The droid is a valid target for the _tracker droid interface_ power. If that power is cast targeting the constructed droid, it only takes 1 minute to synchronize with the droid.

***__At Higher Levels__:*** When you cast this power using a tech slot of 3rd level or higher, use the higher level wherever the power’s level appears in the stat block.

___
> ## Constructed Droid
>_Medium droid, unaligned_
> ___
> - **Armor Class** 11 + the level of the power (natural armor)
> - **Hit Points** 20 (Probe only) or 30 (Pyro and Battle only) + 10 for each slot level above 2nd
> - **Speed** 30 ft. (Pyro and Battle only); 0 ft. and fly 60 ft. (Probe only)
>___
>|STR|DEX|CON|INT|WIS|CHA|
>|:---:|:---:|:---:|:---:|:---:|:---:|
>|18 (+4)| 14 (+2)| 16 (+3)| 18 (+4)| 14 (+2)| 8 (-1)|
>___
> - **Damage Vulnerabilities** ion
> - **Damage Resistances** necrotic, poison, psychic
> - **Condition Immunities** disease, poisoned
> - **Senses** darkvision 60 ft, passive Perception 12
> - **Languages** Galactic Basic, Binary, understands the languages you speak
> - **Proficiency Bonus** equals your bonus
> ___
> ***Circuitry.*** The construct has disadvantage on saving throws against effects that would deal ion or lightning damage.
> ***Surveillance (Probe Only).*** The probe is proficient in Perception and one other skill or tool of your choice.
> ___
> ### Actions
> ***Multiattack.*** The droid makes a number of attacks equal to half this power’s level (rounded down).
> ***Blaster.*** *Ranged Weapon Attack:* your tech attack modifier to hit, range 60/240 ft., one target. Hit: 1d6 + 3 + the power's level energy damage.
> ***Vibroweapon. (Battle Only)*** *Melee Weapon Attack:* your tech attack modifier to hit, reach 5 ft., one target. Hit: 1d12 + 3 + the power's level kinetic damage.
> ***Flamethrower. (Pyro Only)*** The droid shoots a stream of flame from itself in a 15-foot cone. Creatures in the cone must make a Dexterity saving throw (DC = your tech save DC). On a failure, the creature takes 1d8 fire damage + 1d8 fire damage for each power level above 2nd. On a success, the creature takes half as much damage. This cannot be used with Multiattack.
    