---
name: Shutdown
version: 1
level: 5
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
      save: int
    damage:
      - dieCount: 0
        dieType: 0
        type: unknown
    duration:
      length: 1
      unit: minute
    range:
      short: 120
    concentration: true
---
You emit an electromagnetic pulse, shutting down all electronic devices, with the exception of your tech focus, that are not held by or under the direct control of a creature. If it is, the creature must succeed on an Intelligence saving throw to stop the device from being shut down. While the power is active, no electronic device in range can be started or restarted.
    