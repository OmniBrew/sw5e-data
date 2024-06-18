---
name: Guardian
img: https://starwars5ecentral.blob.core.windows.net/site-images/classes/guardian_01.png
snippet: >-
  Force-wielder specializing in melee combat
primaryAbility:
  - str
hitDie: 10
profs:
  armor:
    text: Light armor, medium armor
    has:
      - light_armor
      - medium_armor
  weapon:
    text: All lightweapons, all vibroweapons
    has:
      - all_lightweapons
      - all_vibroweapons
  tool: false
  skill:
    text: Choose two from Acrobatics,Athletics,Deception,Insight,Intimidation,Lore,Perception,Persuasion,Piloting
    choices:
      items: [acrobatics,athletics,deception,insight,intimidation,lore,perception,persuasion,piloting]
      count: 2
  saving-throw:
    text: Constitution, Charisma
    has:
      - con
      - cha
startingEquipment:
  - text:  (a) mesh armor
  - text:  (b) a combat suit
  - text:  and a light physical shield
  - text:  (a) a lightweapon or vibroweapon and a light or medium physical shield or (b) two lightweapons or vibroweapons
  - text:  (a) a priest's pack or (b) an explorer's pack
startingWealth:
  text: >-
    In lieu of the equipment granted by your class and background, you can elect to purchase your starting gear. If
    you do so, you receive no equipment from your class and background, and instead roll for your
    starting wealth using the criteria below:
  value: 5d4
subclassLabel: Guardian Foci
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
A dark-skinned human quickly runs down a corridor, the metal armor under his grey cloak clanking with each step. He rounds the corner into the prison while the lights and power are still out, urging the weakened prisoners to escape. Just then a handful of slavers arrive and ready their blasters. The man draws and ignites a white-bladed lightsaber, ready to die for the strangers behind him. 

A sith pureblood, clad head to toe in black and red armor, charges towards a line of soldiers. Shot after shot deflects off his armor until he reaches his prey, where he unleashes his fury in a series of devastating lightsaber sweeps. 

A zabrak general dramatically leaps to his soon-to-be overrun squad, landing with a flurry of lightsaber attacks. At the arrival of this powerful Jedi, the attackers fall back.

Guardians are the master of the art of lightsaber combat. They focus on utilizing the everpresent power of the Force to enable devastating attacks, often single-handedly turning the tide of battle.

### Protector or Destroyer
An unstoppable agent of the Force, the guardian channels the power flowing through him into his weapons. Their skills with a lightsaber are unrivalled. Subduing their enemies and bolstering their allies, the guardian uses the Force to control what happens around them.

### Natural Leaders
The guardian's command of the Force lends them a powerful presence. Whether through fear and intimidation or respect and admiration, the guardian is one of the greatest generals on the battlefield. They are a symbol of power to their followers.
