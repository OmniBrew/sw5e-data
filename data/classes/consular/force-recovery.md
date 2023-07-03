---
level: 1
name: Force Recovery
mechanics:
  - type: power-resource-recovery
    bonus:
      type: multiple
      value:
        - type: level
          value: consular
          multiplier: 0.5
          min: 1
          ceil: false
        - type: powercastingMod
          value: consular
    limit: points
    label: 'Force Recovery: Consular'
---
You have learned to regain some of your energy by briefly meditating. When you finish a short rest, you can regain a
number of force points equal to half your consular level + your Wisdom or Charisma modifier
(your choice, minimum of one). Once you’ve used this feature, you must complete a long rest before you can use it again.
