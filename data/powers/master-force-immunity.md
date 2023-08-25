---
name: Master Force Immunity
version: 1
level: 8
alignment: universal
prerequisite: Improved Force Immunity
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
      short: Self
    concentration: true
---
A 10-foot-radius faintly shimmering barrier surrounds you. Within the sphere, powers can't be cast and enhanced items become mundane. Until the power ends, the sphere moves with you, centered on you.

Powers and other enhanced effects are suppressed in the sphere and can't protrude into it. A slot expended to cast a suppressed power is consumed. While an effect is suppressed, it doesn't function, but the time it spends suppressed counts against its duration.

***Targeted Effects.*** Powers and other enhanced effects that target a creature or an object in the sphere have no effect on that target.

***Enhanced Areas.*** The area of another power or enhanced effect, such as _force storm_, can't extend into the sphere. If the sphere overlaps an enhanced area, the part of the area that is covered by the sphere is suppressed.

***Powers.*** Any active power or other enhanced effect on a creature or an object in the sphere is suppressed while the creature or object is in it.

***Enhanced Items.*** The properties and powers of enhanced items are suppressed in the sphere. For example, a +1 vibrosword in the sphere functions as an unenhanced vibrosword.

An enhanced weapon's properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If an enhanced weapon or a piece of enhanced ammunition fully leaves the sphere (for example, if you fire an enhanced shot or throw an enhanced saberspear at a target outside the sphere), the enhancement of the item ceases to be suppressed as soon as it exits.

***Enhanced Travel.*** Teleportation fails to work in the sphere, whether the sphere is the destination or the departure point for such enhanced travel. A portal to another location temporarily closes while in the sphere.

***Creatures and Objects.*** A creature or object summoned or created by powers temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere.

***Tech Override/Sever Force.*** Powers and enhanced effects such as *sever force* have no effect on the sphere. Likewise, the spheres created by different scrambling field powers don't nullify each other.
    