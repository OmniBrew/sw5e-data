---
name: Sense Emotion
version: 1
level: 1
alignment: universal
prerequisite: 
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
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
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
You attune your senses to pick up the emotions of others for the duration. When you cast the power, and as your action on each turn until the power ends, you can focus your senses on one humanoid you can see within 30 feet of you. You instantly learn the target's prevailing emotion, whether it's love, anger, pain, fear, calm, or something else, and you have advantage on Wisdom (Insight) checks against the target. If the target isn't actually humanoid or it is immune to being charmed, you sense that it is calm.
    