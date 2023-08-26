---
name: Improved Battle Meditation
version: 1
level: 5
alignment: universal
prerequisite: battle meditation
type: force
tags:
  - damage
classes:
  - consular
  - guardian
  - sentinel
  - adept
  - beguiler
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: cha
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: self
    concentration: true
---
You exude an aura out to 15 feet that boosts the morale and overall battle prowess you and your allies while simultaneously reducing the opposition's combat-effectiveness by eroding their will to fight. 

Whenever you or a friendly creature within your meditation makes an attack roll or a saving throw, they can roll a d6 and add the number rolled to the attack roll or saving throw. 

Whenever a hostile creature enters your meditation or starts its turn there, it must make a Charisma saving throw. On a failed save, it must roll a d6 and subtract the number rolled from each attack roll or saving throw it makes before the end of your next turn. On a successful save, it is immune to this power for 1 day.
    