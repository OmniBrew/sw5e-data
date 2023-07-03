---
level: 2
mechanics:
  - type: reaction
    shortDesc: >-
      When you are hit by an attack, gain +{{ powercastingMod:consular }} AC until the start of your next turn,
      including against the triggering attack.
    resource:
      reset: long
      max:
        type: progressive
        limit: consular
        value:
          2: 2
          5: 3
          9: 4
          13: 5
          17: 6
name: Force Shield
---
You learn how to defend yourself purely through your strength with the Force. When you are hit by an attack, you
can use your reaction to shroud yourself in Force energy. Until the start of your next turn,
you have a bonus to AC equal to your Wisdom or Charisma modifier (your choice, minimum of +1). This includes the triggering attack.

You can use this feature twice. You gain an additional use at 5th, 9th, 13th, and 17th level. You regain all expended uses when you finish a long rest.
