---
name: Scholar
img: https://starwars5ecentral.blob.core.windows.net/site-images/classes/scholar_01.png
snippet: >-
  A true scholar is never satisfied
primaryAbility:
  - int
hitDie: 8
profs:
  armor:
    text: Light armor
    has:
      - light_armor
  weapon:
    text: Simple blasters, simple vibroweapons, martial vibroweapons with the finesse property
    has:
      - simple_blasters
      - simple_vibroweapons
      - martial_vibroweapons_with_the_finesse_property
  tool:
    text: Any one
    has:
      - any_one
  skill:
    text: Choose two from Deception,Insight,Intimidation,Investigation,Lore,Medicine,Nature,Persuasion,Survival
    choices:
      items: [deception,insight,intimidation,investigation,lore,medicine,nature,persuasion,survival]
      count: 2
  saving-throw:
    text: Intelligence, Wisdom
    has:
      - int
      - wis
startingEquipment:
  - text:  (a) a simple vibroweapon or (b) a simple blaster and two power cells
  - text:  (a) a entertainer's pack
  - text:  (b) an explorer's pack
  - text:  or (c) a scholar's pack
  - text:  A tool with which you are proficient
  - text:  A combat suit
startingWealth:
  text: >-
    In lieu of the equipment granted by your class and background, you can elect to purchase your starting gear. If
    you do so, you receive no equipment from your class and background, and instead roll for your
    starting wealth using the criteria below:
  value: 5d4
subclassLabel: Academic Pursuits
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
An overwhelming horde of tusken raiders bears down on a chiss and her fellow adventurers. She gives the order and her allies unleash a single coordinated attack cutting deep into their lines. Under her command the enemy is quickly routed against all odds, all according to plan.

Deep within the once thought abandoned ruins, a nautolan tends to his companions wounds as they rest. Countless long nights of study and training have conditioned him to keep going even when all others have exhausted themselves. He will see them through this.

A twi'lek in fine vestments addresses a gathering crowd. What was the making of an angry mob begins to disperse, his mere presence putting them at ease, giving his companions time to make their escape. 

Scholars are master of the mundane arts, using methodical practices to turn the tables to their advantage. From years of study and testing, scholars take in the situation around them and quickly formulate the means to achieve whatever they have minds set to. Whatever pursuit they follow, a scholar will have a plan for anything that comes their way.

### The Pursuit of Knowledge
A true scholar is never satisfied. They are always seeking out a new answer to a new question. This often goes hand-in-hand with seeking a life of adventure, to explore new, hidden areas, or accompany those that do. The life of a scholar often times begins in the mundane, as a teacher or sage. Sometimes they serve as doctors, diplomats, or as officers in the military.

### To Learn, To Know
For scholars, mundane life is often too slow. When life becomes stagnant or when an answer cannot be found, the call to adventure rings louder. Scholars will often go to ancient, forgotten, and often dangerous places to find something to quench their thirst for knowledge.
