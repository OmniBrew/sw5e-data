---
name: Monk
img: https://starwars5ecentral.blob.core.windows.net/site-images/classes/monk_01.png
snippet: >-
  Monks make careful study of a mystical energy that most monastic orders call focus
primaryAbility:
  - dex
hitDie: 8
profs:
  armor: false
  weapon:
    text: Simple blasters, simple vibroweapons, martial vibroweapons that lack the dexterity, heavy, special, and two-handed properties
    has:
      - simple_blasters
      - simple_vibroweapons
      - martial_vibroweapons_that_lack_the_dexterity
      - heavy
      - special
      - and_two-handed_properties
  tool: false
  skill:
    text: Choose two from Acrobatics,Athletics,Insight,Lore,Perception,Stealth
    choices:
      items: [acrobatics,athletics,insight,lore,perception,stealth]
      count: 2
  saving-throw:
    text: Strength, Dexterity
    has:
      - str
      - dex
startingEquipment:
  - text:  (a) a vibroweapon with which you are proficient or (b) a simple blaster and a power cell
  - text:  (a) a dungeoneer's pack or (b) an explorer's pack
  - text:  10 vibrodarts
startingWealth:
  text: >-
    In lieu of the equipment granted by your class and background, you can elect to purchase your starting gear. If
    you do so, you receive no equipment from your class and background, and instead roll for your
    starting wealth using the criteria below:
  value: 5d4
subclassLabel: Monastic Orders
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
Her vibrostaff a blur as they deflect an incoming hail of blaster bolts, a human springs over a barricade and throws herself into the massed ranks of pirates on the other side. She whirls among them, knocking their blows aside and sending them reeling, until at last she stands alone.

Taking a deep breath, a zabrak covered in tattoos settles into a battle stance. As the first charging mercenaries reach him, he exhales and a blast of negative energy courses from his hands, engulfing his foes.

Moving with the silence of the night, a black-clad mirialan steps into a shadow beneath an arch and nimbly climbs to the balcony a stone's throw above her. She slides her blade free of its cloth-wrapped scabbard and peers through the open window at the warlord, so vulnerable in the grip of sleep.

Whatever their discipline, monks are united in their ability to harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.

### The Power of Focus
Monks make careful study of a mystical energy that most monastic orders call focus. This energy is an element of the power that suffuses the galaxy�specifically, the element that flows through living bodies. Monks harness this energy within themselves to create powerful effects and exceed their bodies' physical capabilities, and some of their special attacks can hinder the flow of focus in their opponents. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of focus gives them more power over their bodies and the bodies of their foes.

### Training and Asceticism
Most monks live entirely apart from the surrounding population, secluded from anything that might impede their spiritual progress. Others are sworn to isolation, emerging only to serve as spies or assassins at the command of their leader, a noble patron, or some other power.

The majority of monks don't shun their neighbors, making frequent visits to nearby towns or villages and exchanging their service for food and other goods. As versatile warriors, monks often end up protecting their neighbors from monsters or brigands.

For a monk, becoming an adventurer means leaving a structured, communal lifestyle to become a wanderer. This can be a harsh transition, and monks don't undertake it lightly. Those who leave their cloisters take their work seriously, approaching their adventures as personal tests of their physical and spiritual growth. 
