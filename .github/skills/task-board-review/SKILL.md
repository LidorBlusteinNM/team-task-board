---
name: task-board-review
description: Review behavior changes in the Team Task Board application. Use this skill when asked to review an implemented task-board feature or its current diff.
---

# Task Board Feature Review

When reviewing a feature:

1. Compare the implemented behavior with `requirements/feature-request.md`.
2. Separate confirmed defects from possible risks and product questions.
3. Check compatibility with previously saved `localStorage` data.
4. Review empty states and invalid input.
5. Confirm user-provided text is rendered safely with `textContent`, not `innerHTML`.
6. Check sorting and filtering boundary cases.
7. Identify unrelated changes or unnecessary abstractions.
8. Finish with focused manual browser-verification steps.

For every finding:

- Reference the relevant file or function.
- Explain the evidence.
- State how the finding can be verified.

Do not modify files unless explicitly requested.
