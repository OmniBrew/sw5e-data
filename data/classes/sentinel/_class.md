---
name: Sentinel
snippet: >-
  The sentinel uses stealth and subterfuge to accomplish the will of the Force
primaryAbility:
  - dex
hitDie: 8
profs:
  armor:
    text: Light armor
    has:
      - light_armor
  weapon:
    text: Simple lightweapons, simple vibroweapons, martial lightweapons with the finesse property, martial vibroweapons with the finesse property
    has:
      - simple_lightweapons
      - simple_vibroweapons
      - martial_lightweapons_with_the_finesse_property
      - martial_vibroweapons_with_the_finesse_property
  tool:
    text: One specialist's kit of your choice
    has:
      - one_specialist's_kit_of_your_choice
  skill:
    text: Choose two from Acrobatics,Animal Handling,Insight,Intimidation,Perception,Persuasion,Piloting,Stealth,Technology
    choices:
      items: [acrobatics,animal handling,insight,intimidation,perception,persuasion,piloting,stealth,technology]
      count: 2
  saving-throw:
    text: Dexterity, Charisma
    has:
      - dex
      - cha
startingEquipment:
  - text:  (a) two simple lightweapons or vibroweapons or (b) one lightweapon or vibroweapon with which you are proficient
  - text:  (a) a dungeoneer's pack or (b) an explorer's pack
  - text:  A specialist's kit with which you are proficient
  - text:  A combat suit and a light physical shield
startingWealth:
  text: >-
    In lieu of the equipment granted by your class and background, you can elect to purchase your starting gear. If
    you do so, you receive no equipment from your class and background, and instead roll for your
    starting wealth using the criteria below:
  value: 5d4
subclassLabel: Sentinel Callings
progression:
  subclass:
    - 2
    - 6
    - 10
    - 14
  abi:
    - 4
    - 8
    - 12
    - 16
    - 19
---
Clad in black robes, the rattataki pulls his hood forward and steps into the shadowy alcove, only to reappear further down the hall. As his quarry walks past, he presses the hilt of his lightsaber to the back of their head, quickly toggling it on-and-off. He is gone before the corpse hits the ground.

The togruta dashes across the battlefield, doublesaber deflecting blaster shots to the ground. She pulls her wounded padawan to her feet, and guides her away from the warzone.

Green-bladed lightsaber a blur, the cathar ferociously presses the attack. With each strike, she guides her opponent closer to the ravine's edge. A flurry of blows followed by a quick *force push* and her foe tumbles over the edge.

Sentinels are the masters of blending force powers with weapon attacks. They weave the two together so expertly that their foes have trouble predicting them.

### The Middle of the Road
The sentinel uses stealth and subterfuge to accomplish the will of the Force. Where the consular focuses on mastery of the Force and the guardian focuses on the mastery of the lightsaber, the sentinel focuses on merging the two. 

### Solitary Action
Sentinels are notoriously independent, most comfortable acting alone and without backup; where some use a team to make up for their weaknesses, the sentinel uses the Force to overcome theirs. While some take this independent streak to the extreme, they are usually accepting of authority, as long as they are allowed to carry out directions using their preferred methods.
