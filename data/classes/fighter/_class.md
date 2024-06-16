---
name: Fighter
img: https://starwars5ecentral.blob.core.windows.net/site-images/classes/fighter_01.png
snippet: >-
  Versatile combatant who excels at both range and in melee
primaryAbility:
  - str
  - dex
hitDie: 10
profs:
  armor:
    text: All armor
    has:
      - light
      - medium
      - heavy
  weapon:
    text: All blasters, all vibroweapons
    has:
      - simple_blaster
      - simple_vibroweapon
      - martial_blaster
      - martial_vibroweapon
  tool: false
  skill:
    text: Choose two from Acrobatics,Animal Handling,Athletics,Lore,Insight,Intimidation,Perception,Survival
    choices:
      items: [acrobatics,animal_handling,athletics,lore,insight,intimidation,perception,survival]
      count: 2
  saving-throw:
    text: Strength, Constitution
    has:
      - str
      - con
startingEquipment:
  - choices:
      items: [m-3-predator,m-4-shuriken,m-8-avenger,m-92-mantis,m-23-katana]
      count: 1
  - choices:
      items: [omni-blade,omni-hamer]
      count: 1
  - has:
      - stock-light-armor
      - stock-medium-armor
      - stock-heavy-armor
  - text:  (a) mesh armor or (b) a combat suit,
  - text:  blaster rifle or simple blaster
  - text:  and two power cells
  - text:  (a) a vibroweapon or heavy pistol and a light or medium physical shield or (b) two vibroweapons
  - text:  (a) a light pistol and a power cell or (b) two vibrodaggers
  - text:  (a) a dungeoneer's pack or (b) an explorer's pack
startingWealth:
  text: >-
    In lieu of the equipment granted by your class and background, you can elect to purchase your starting gear. If
    you do so, you receive no equipment from your class and background, and instead roll for your
    starting wealth using the criteria below:
  value: 5d4
subclassLabel: Fighter Specialties
progression:
  subclass:
    - 3
    - 7
    - 10
    - 15
    - 18
  abi:
    - 4
    - 6
    - 8
    - 12
    - 14
    - 16
    - 19

---
A Trandoshan runs frantically across rooftops, constantly looking over his shoulder. As he prepares to leap a gap, a blaster bolt hits him in the back and renders him unconscious. His blurry vision barely makes out the figure of a masked woman who casually approaches, ready to collect her bounty.

With his muscular arms held wide, a grizzled-looking Wookiee grins to his bloodthirsty crowd. He turns back to his arena opponent just in time to see the Besalisk take a swing. He ducks, punching the four-armed fighter in the gut. Two wild haymakers later, and he stands alone as the gladiatorial champion. 

Taking a deep breath, a Republic soldier looks out onto the war zone waging across the frozen surface of Ilum. He grips his blaster rifle tightly then, with a nod to the dozen squad-mates beside him, he charges onto the battlefield. 

Fighters combine discipline with martial skills to become the best pure warriors in the galaxy. Fighters can be stalwart defenders of those in need, cruel marauders, or brave advent-urers. They fight for glory, honor, to right wrongs, to gain power, to acquire wealth, or simple for the thrill of battle.

### All in a Day's Work
Many fighters see adventures, raids on enemy strongholds, and dangerous missions as their jobs. Some want to defend those who can't defend themselves while others seek to use their muscle to carve their own place of importance in the galaxy. Fighters can take the form of guards, champions, bounty hunters, enforcers, mercenaries, freedom fighters, or simply armed explorers.

### Code Red
Most fighters come to the profession after receiving at least some amount of formal training from a military organization. Some attend formal academies; others are self-taught and well tested. A fighter may have taken up his weapon to escape a mundane life while another may be following a proud family tradition. Whatever their origins, most fighters share an unshakeable loyalty. Fighters follow orders with little hesitation, as failure can often mean death.
