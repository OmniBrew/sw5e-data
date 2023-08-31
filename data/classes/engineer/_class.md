---
name: Engineer
img: https://starwars5ecentral.blob.core.windows.net/site-images/classes/engineer_01.png
snippet: >-
  While perhaps not as intimidating as a heavily-armored trooper, or as exotic as a lighsaber-wielding guardian, engineers are no less vital to group dynamic
primaryAbility:
  - int
hitDie: 8
profs:
  armor:
    text: Light armor
    has:
      - light
  weapon:
    text: Simple blasters, simple vibroweapons
    has:
      - simple_blaster
      - simple_vibroweapon
  tool:
    choices:
      items: [armorsmiths-workbench,tailors-tools,tinkers-tools,weaponsmiths-workbench]
      count: 1
    text: Tinker's implements,one of your choice
    has:
      - tinkers-tools
  skill:
    text: Choose two from Investigation, Lore, Medicine, Nature, Piloting, Technology
    choices:
      items: [investigation,lore,medicine,nature,piloting,technology]
      count: 2
  saving-throw:
    text: Constitution, Intelligence
    has:
      - con
      - int
startingEquipment:
  - text:  (a) a simple vibroweapon or (b) a simple blaster and two power cells
  - text:  (a) a dungeoneer's pack or (b) an explorer's pack
  - text:  A combat suit
  - text:  a set of tinker's implements
  - text:  a vibrodagger
  - text:  and a wristpad
startingWealth:
  text: >-
    In lieu of the equipment granted by your class and background, you can elect to purchase your starting gear. If
    you do so, you receive no equipment from your class and background, and instead roll for your
    starting wealth using the criteria below:
  value: 5d4
subclassLabel: Engineering Disciplines
progression:
  subclass:
    - 3
    - 6
    - 14
    - 16
  abi:
    - 4
    - 8
    - 12
    - 16
    - 19
  columns:
    - label: features
    - label: tech_points
      values: [2,4,5,7,11,13,15,17,20,23,26,26,30,30,34,34,39,42,45,50]
    - label: tech_point_limit
      values: [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,6,6]
---
Flinching occasionally as a blaster bolt hits the nearby bulkhead, a Sullustan mechanic quickly solders a large wire. He peers through his tinted goggles, ignoring the shouts of his ship captain as the enemy descends on the hanger. Finally he shouts with pride as the repaired coupling powers up, causing the frigate to hum with energy. He gathers his tools and runs into the ship moments before it finally takes off. 

Inside, the human captain jumps into the cockpit. She nods to her droid co-pilot, who quickly begins charting a course home. Before the calculations can be completed, enemy Starfighters scream in from the clouds. The pilot rolls the ship, nimbly evading incoming fire. She reroutes the power to shields, leaving just enough for astronavigation. Just as the energy reserves near depletion, the exosphere and stars beyond blur into streaks of light. In a flash, they warp to safety. 

A Cerean officer surveys the battlefield, looking for weaknesses. When he identifies a potential problem, he keys in a quick combination in his wristpad. In a blink, a custom suit of armor assembles itself around him. As the helmet locks into place, the officer leaps into the air, flying overhead and raining destruction on the opposition.

Every machine needs an engineer to run it, and a living crew is no different. Engineers are the experts and professionals who rely on skill, bravery, and their tools to survive and keep others alive. While they do not claim to be fighters, their mere presence can turn the tide of battle or simply keep operations running.

### Behind the Curtain
While perhaps not as intimidating as a heavily-armored trooper, or as exotic as a lighsaber-wielding guardian, engineers are no less vital to group dynamic. They are armorers and gunsmiths, electricians and welders, or any other facet to be found in facilities across the galaxy. Their work, often unsung, is what keeps starships (and their crew) intact.

### Unflappable
It takes bravery for a soldier to enter a battlefield. It perhaps takes more for someone who is unarmed, and untrained in combat, to do the same. Engineers put their lives on the line for a living, whether by choice or acknowledging their plights as an occupational hazard. Whether they come from an elite training academy or learned their talents surviving in the slums, they are no strangers to danger and conflict.
