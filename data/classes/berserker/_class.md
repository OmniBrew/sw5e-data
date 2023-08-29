---
name: Berserker
img: https://starwars5ecentral.blob.core.windows.net/site-images/classes/berserker_01.png
snippet: >-
  People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one's own nature was a mark of superiority
primaryAbility:
  - str
hitDie: 12
profs:
  armor:
    text: Light armor, medium armor
    has:
      - light_armor
      - medium_armor
  weapon:
    text: All vibroweapons, simple blasters
    has:
      - all_vibroweapons
      - simple_blasters
  tool: false
  skill:
    text: Choose two from Animal Handling,Athletics,Intimidation,Nature,Perception,Survival
    choices:
      items: [animal handling,athletics,intimidation,nature,perception,survival]
      count: 2
  saving-throw:
    text: Strength, Constitution
    has:
      - str
      - con
startingEquipment:
  - text:  (a) a vibroweapon and a light or medium physical shield or (b) two vibroweapons
  - text:  (a) two techaxes or (b) two vibrospears
  - text:  (a) a dungeoneer's pack or (b) an explorer's pack
startingWealth:
  text: >-
    In lieu of the equipment granted by your class and background, you can elect to purchase your starting gear. If
    you do so, you receive no equipment from your class and background, and instead roll for your
    starting wealth using the criteria below:
  value: 5d4
subclassLabel: Berserker Approaches
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
A massive wookiee hunter prowls through the forest, hefting his vibroaxe. With a roar he charges at the pair of trandoshans who dared poach his kin. 

A gamorrean snarls at the latest challenger to his authority over their savage tribe, ready to break his neck with his bare hands as he did to the last six rivals. 

Frothing at the mouth, a nikto slams his helmet into the face of his foe, then turns to drive his armored elbow into the gut of another.

These berserkers, different as they might be, are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea. For every berserker, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.

### Primal Instinct
People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one's own nature was a mark of superiority. To a berserker, though, civilization is no virtue, but a sign of weakness. The strong embrace their animal nature keen instincts, primal physicality, and ferocious rage. Berserkers are uncomfortable when hedged in by walls and crowds. They thrive where the civilized don't.

Berserkers come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A berserker can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise.

### A Life of Danger
Not every person deemed "berserkers" by scions of civilized society has the berserker class. A true berserker among these people is as uncommon as a skilled fighter in a town, and he or she plays a similar role as a protector of the people and a leader in times of war. Life in the wild places of the world is fraught with peril: rival tribes, deadly weather, and terrifying monsters. Berserkers charge headlong into that danger so that their people don't have to.

Their courage in the face of danger makes berserkers perfectly suited for adventuring. Wandering is often a way of life for their native tribes, and the rootless life of the adventurer is little hardship for a berserker. Some berserkers miss the close-knit family structures of the tribe, but eventually find them replaced by the bonds formed among the members of their adventuring parties.
