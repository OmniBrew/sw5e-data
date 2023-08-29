---
name: Criminal
startingCredits: 1500
mechanics:
  - type: feat-choice
    limit: [silvered-tounged,threatening,quick-fingered,stealthy,competitor,specialist,feigned-confidence,observant]
  - type: model-choice
    model: subgrounds
    label: Choose a criminal specialty
    options: true
    limits:
      - attr: id
        value: ['BG_burglar', 'BG_blackmailer', 'BG_enforcer', 'BG_fence', 'BG_highway-robber', 'BG_highered-killer', 'BG_pickpocket', 'BG_thug']
  - type: tool
    value: gaming-set
  - type: tool
    value: thieves-tools
---