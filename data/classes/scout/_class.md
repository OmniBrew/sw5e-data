---
name: Scout
img: https://starwars5ecentral.blob.core.windows.net/site-images/classes/scout_01.png
snippet: >-
  Warriors in their own right, scouts specialize in tracking and hunting the monsters that threaten civilization�humanoid raiders, rampaging beasts and monstrosities, terrible Force-wielders, and renegade droids
primaryAbility:
  - dex
hitDie: 10
profs:
  armor:
    text: Light armor, medium armor
    has:
      - light_armor
      - medium_armor
  weapon:
    text: All blasters, all vibroweapons
    has:
      - all_blasters
      - all_vibroweapons
  tool: false
  skill:
    text: Choose two from Animal Handling,Athletics,Insight,Investigation,Perception,Piloting,Stealth,Survival,Technology
    choices:
      items: [animal handling,athletics,insight,investigation,perception,piloting,stealth,survival,technology]
      count: 2
  saving-throw:
    text: Strength, Dexterity
    has:
      - str
      - dex
startingEquipment:
  - text:  (a) mesh armor or (b) a combat suit
  - text:  blaster rifle or simple blaster
  - text:  and two power cells
  - text:  (a) a vibroweapon and a light physical shield or (b) two simple vibroweapons
  - text:  (a) a holdout and a power cell or (b) two vibrodaggers
  - text:  (a) a dungeoneer's pack or (b) an explorer's pack
  - text:  A wristpad
startingWealth:
  text: >-
    In lieu of the equipment granted by your class and background, you can elect to purchase your starting gear. If
    you do so, you receive no equipment from your class and background, and instead roll for your
    starting wealth using the criteria below:
  value: 5d4
subclassLabel: Scout Techniques
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
Rough and grizzled looking, a human stalks alone through the shadows of trees, hunting the quarry he knows is planning a raid on a nearby settlement. Clutching a techblade in each hand, he becomes a whirlwind of steel, cutting down one enemy after another.

After tumbling away from the shrapnel of a missile's explosion, a bothan finds her feet and quick-fires two shots from her carbine at the oncoming tank. Shrugging off the wave of fear that threatens to permeate her entire being, she strafes around her foe, firing shot after shot to try to penetrate the tank's thick armor.

Glancing at his wristpad, a sullustan looks through the eyes of his tracker droid. Transmitting instructions, he sends his droid to distract the houk he's been tracking while he readies his sniper rifle for the shot.

Scouts are the first on the trail and the last to lose it, tracking their quarry for miles unimpeded. They are adaptable, wielding both tech powers and their weaponry to overcome their foes.

### Deadly Hunters
Warriors in their own right, scouts specialize in tracking and hunting the monsters that threaten civilization�humanoid raiders, rampaging beasts and monstrosities, terrible Force-wielders, and renegade droids. They learn to track their quarry as a predator does, moving stealthily through any terrain and hiding themselves in brush and rubble. Scouts focus their combat training on techniques that are particularly useful against their specific favored foes.

Scouts acquire the ability to cast tech powers through utilization of a wristpad. Their powers, like their combat abilities, emphasize speed, stealth, and the hunt. A scout's talents and abilities are honed with deadly focus on the grim task of protecting the civilization.

### Independent Adventurers
Though a scout might make a living as a bounty hunter, a guide, or a tracker, a scout's true calling is to defend civilization from the ravages of monsters and humanoid hordes that press in. In some places, scouts gather in secretive orders, though many scouts are independent almost to a fault, knowing that, when a rancor or a band of pirates attacks, a scout might be the first�and possibly the last�line of defense. This fierce independence makes scouts well suited to adventuring, since they are accustomed to life far from the comforts of a dry bed and a hot bath. Faced with city-bred adventurers who grouse and whine about the hardships of the wild, scouts respond with some mixture of amusement, frustration, and compassion. But they quickly learn that other adventurers who can carry their own weight in a fight against civilization's foes are worth any extra burden. Coddled city folk might not know how to feed themselves or find fresh water in the wild, but they make up for it in other ways.
