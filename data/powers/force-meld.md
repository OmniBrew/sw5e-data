---
name: Force Meld
version: 1
level: 5
alignment: universal
prerequisite: Force Whisper
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack:
      type: ranged
      wp: power
      proficient: True
    dc: false
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: round
    range:
      short: 30
    concentration: false
---
You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Droids, constructs, and creatures with Intelligence scores of 2 or less aren't affected by this power.

Until the power ends, the targets can communicate telepathically through the bond whether or not they have a common language. The communication is possible over any distance, though it can't extend beyond a single planet.
    