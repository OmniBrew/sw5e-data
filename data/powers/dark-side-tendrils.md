---
name: DARK SIDE TENDRILS
version: 1
level: 1
alignment: dark side
prerequisite: None
type: force
tags:
  - damage
classes:
  - force
mechanics:
  - castingTime:
      length: 1
      unit: action

    dc:
      save: strength
    damage:
      - dieCount: 2
        dieType: 6
        type: necrotic
    duration:
      length: Instantaneous
      unit: 
    range:
      short: Self
    concentration: False
---
Tendrils of dark energy erupt from you and batter all
creatures within 10 feet of you. Each creature in that
area must make a Strength saving throw. On a failed
save, a target takes 2d6 necrotic damage and can't take
reactions until its next turn. On a successful save, the
creature takes half damage, but suffers no other effect.
Force Potency. When you cast this power using a
power slot of 2nd level or higher, the damage increases
by 1d6 for each slot level above 1st.

    