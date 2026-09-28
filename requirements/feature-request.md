# Feature: Task Priorities

Add priorities to tasks and show a summary of open tasks by priority.

## Acceptance criteria

- Valid priorities are **High**, **Medium**, and **Low**.
- New tasks default to **Medium**.
- Existing saved tasks without a priority are treated as **Medium**.
- Open tasks are sorted **High**, **Medium**, then **Low**.
- Tasks with the same priority keep their creation order.
- Completed tasks are excluded from the priority summary.
- Users can filter open tasks by priority.
- The feature must work without packages, frameworks, CDN dependencies, or a server.

## Deliberately excluded

The feature does not require:

- Editing the priority of an existing task
- A backend or database
- User accounts
- Due dates
- Drag-and-drop behavior
