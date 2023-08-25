---
name: Wire Tow
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
      unit: action

    dc:
      save: str
    damage:
      - dieCount: 2
        dieType: 10
        type: kinetic
    duration:
      length: 1
      unit: minute
    range:
      short: 30
    concentration: true
---
You project a length of wire towards a foe to bring them within your grasp. Make a ranged tech attack against the target. On a hit, the target takes 2d10 kinetic damage, and you can pull it up to 25 feet closer to you. If you score a critical hit, the target is also knocked prone. If the target ends this movement within 5 feet of you and is no more than one size larger than you, the target is grappled by you for the duration.

If a creature you grapple with this power uses its action to escape, it must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check against your tech save DC to do so.

This power ends if the attack misses or the grapple ends.

***__At Higher Levels__:*** When you cast this power using a tech slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd.
    