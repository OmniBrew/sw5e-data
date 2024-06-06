---
level: 20
mechanics:
  - type: asi-choice
    options: true
    limit: [cha, wis]
    selections: 1
    total: 4
    max: 1
  - type: model-choice
    options: true
    label: 'Charisma or Wisdom'
    model: max-asi
    selections: 1
    limits: ['charisma-24', 'wisdom-24']
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
