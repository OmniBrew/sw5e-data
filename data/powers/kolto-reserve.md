---
name: Kolto Reserve
version: 1
level: String
alignment: string
prerequisite: String
type: tech
tags:
  - damage
classes:
  - tech
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
      length: 0
      unit: instant
    range:
      short: String
    concentration: false
---
You touch a creature and grant it a small reserve of kolto. The first time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the power ends. If the power is still in effect when the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the powers ends. This power has no effect on droids or constructs.
    