---
name: Override Interface
version: 1
level: 5
alignment: none
prerequisite: 
type: tech
tags:
  - damage
classes:
  - engineer
  - operative
  - scout
  - shield
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: int
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 60
    concentration: true
---
You choose one droid or construct you can see within range and attempt to remotely override its controls. The target must make an Intelligence saving throw. If the construct has the 'Piloted' trait, and has a pilot controlling it that is not incapacitated, it gains a bonus to the saving throw equal to the pilot's Intelligence modifier. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. On a failed save, the creature is charmed by you for the duration.

While the droid is charmed, you have a wireless link with it as long as the two of you are on the same planet. Via your tech focus, you can use this link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as "Attack that creature," "Move over there," or "Fetch that object." If the droid completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability. 

You can use your action to take total and precise control of the target. Until the end of your next turn, the droid takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. 

Each time the target takes damage, it makes a new Intelligence saving throw against the power. If the saving throw succeeds, the power ends.

***__At Higher Levels__:*** When you cast this power using a 6th-level tech slot, the duration is 10 minutes. When you use a 7th-level tech slot, the duration is 1 hour. When you use a tech slot of 8th level or higher, the duration is 8 hours.
    