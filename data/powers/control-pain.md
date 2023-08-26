---
name: Control Pain
version: 1
level: 5
alignment: universal
prerequisite: force body
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
You use the Force to push your body beyond its normal limits. You can't die from damage or from failed death saving throws while this power is in effect, but the effort taxes you. If you have 0 hit points while you are under the effect of this power, you do not fall unconscious, and continue acting and fighting normally. While you remain at 0 hit points, you must make a death saving throw at the start of each of your turns. Each time you fail a death saving throw, you suffer a cumulative -1 penalty to attack rolls, ability checks, and saving throws (including death saving throws). This penalty lasts until you regain hit points. Successful death saving throws have no effect, but a natural 20 restores 1 hit point as usual. 

If you have 0 hit points when this power ends, you die instantly.
    