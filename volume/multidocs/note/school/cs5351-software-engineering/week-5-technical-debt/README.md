# Week 5 - Technical Debt

## Dimension

Technical debts have been classified by dimension:

- Type
  - Code
  - Testing
  - Documentation
  - Infrastructure
  - Design
  - Requirement
  - Architectural
  - ...

- Intentionality (intentionally or unintentionally) 有意或無意

- Time horizon (short or long term)

- Degree of focus
  - Focused Debt (intentionally and managed)
  - Unfocused debt

## Patterns to Increase Technical Debts

- Schedule Pressure 進度壓力
- Duplication of Code 重複程式碼
- Get it "right" the first time

## Manage Technical Debts

Visualize the technical debts on Kanban board

- Backlogs
- Static analyzers
- Linter

Backlogs are the most used tool

Commonly used backlog tools are Jira, Hansoft, and Excel

- Do nothing, "if it ain't broke, don’t fix it"
- Use a risk management approach to evaluating and prioritizing technical debt's cost and value. E.g., allocate 5 to 10 percent of each release cycle to addressing technical debt
- Manage the expectations of customers and nontechnical stakeholders by making them equal partners and facilitating open dialogue about the debt’s implications


### Ineffective

Comments
- Not considered tracking

Documentation
- Increases TD awareness 提高技術債意識
- But highest overhead 高開銷

Bug system
- Higher overhead

Test coverage
- Not seem to contribute too much to the awareness and tracking level 
- Not involve much overhead
- Related to only a small part of TD

