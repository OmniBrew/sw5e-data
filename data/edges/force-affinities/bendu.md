---
name: Bendu
mechanics:
  - type: augment
    value:
      model: class-features
      id: consular.forcecasting
      limit: [bonus-pc-resource]
      instances: 0
    merge:
      value:
        type: multiple
        value:
          - type: mod
            value: cha
          - type: mod
            value: wis
---
When you successfully cast a light side power, either your or the target’s (your choice) hit point maximum and
current hit points increase by an amount equal to the power’s level. This effect lasts for 1 minute. You can only
have one instance of this effect active at a time.
