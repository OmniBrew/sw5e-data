---
name: Mind Prison
version: 1
level: 6
alignment: dark
prerequisite: mind trap
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
      save: int
    damage:
      - dieCount: 5
        dieType: 10
        type: psychic
    duration:
      length: 1
      unit: minute
    range:
      short: 60
    concentration: true
---
You attempt to bind a creature within an illusory cell that only it perceives. One creature you can see within range must make an Intelligence saving throw. The target succeeds automatically if it is immune to being charmed. On a successful save, the target takes 5d10 psychic damage, and the power ends. On a failed save, the target takes 5d10 psychic damage, and you make the area immediately around the target's space appear dangerous to it in some way. You might cause the target to perceive itself as being surrounded by fire, a storm of blaster-fire, or deadly toxic gas, for example. Whatever form the illusion takes, the target can't see or hear anything beyond it and is restrained for the power's duration. If the target is moved out of the illusion, makes a melee attack through it, or reaches any part of its body through it, the target takes 10d10 psychic damage, and the power ends. This power has no effect on droids or constructs.
    