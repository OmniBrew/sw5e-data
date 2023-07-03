---
level: 1
mechanics:
  - type: asi-maximum
    abilities: [wis, cha]
    max: 24
  - type: asi
    ability: wis
    amount: 4
  - type: asi
    ability: cha
    amount: 4
  - type: model-choice
    model: powers
    options: true
    known: true
    limits:
      - attr: level
        value: [3]
    hide: true
    isolated: true
    selections: 1
    append:
      type: 'power-resource'
      levels: [3]
      resource:
        reset: short
        id: one-with-the-force
name: One with the Force
---
Your attunement to the Force is absolute. Your Wisdom or Charisma score increases by 4, and your
maximum for this score increases by 4. Additionally, you gain mastery over a single force power, and can
cast it with little effort. Choose one 3rd-level force power that you know as your signature power. You can cast it
once at 3rd level without expending force points. When you do so, you can’t do so again until you finish a short or long rest.

If you want to cast it at a higher level, you must expend force points as normal.
