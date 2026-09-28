# Team Task Board - Starting Project

This is the dependency-free starting project for the **Engineering with GitHub Copilot** live workshop.

## Requirements

- Visual Studio Code
- GitHub Copilot access
- A modern browser

No .NET SDK, Node.js, npm, framework, web server, or additional VS Code extension is required.

## Run the application

1. Extract the project folder.
2. Open the folder in VS Code.
3. Open `index.html` in the default browser.
4. Add, complete, and delete tasks.

The application stores tasks in browser `localStorage`. Use **Reset demo data** to return to the prepared starting state.

## Starting behavior

- Add a task
- Display open and completed tasks
- Mark tasks as completed or open
- Delete tasks
- Save and reload tasks through `localStorage`

## Workshop feature

The live workshop uses Copilot to implement the feature described in `requirements/feature-request.md`.

The starting application intentionally has **no priority functionality**. Do not implement the feature before the presentation.

## Workshop files

- `.github/copilot-instructions.md`: persistent repository guidance for Copilot
- `.github/skills/task-board-review/SKILL.md`: reusable feature-review workflow
- `requirements/feature-request.md`: local requirement and MCP fallback

## Reset guidance for the presenter

Before repeating the demo:

1. Restore the starting-project folder or reset the Git branch.
2. Click **Reset demo data** in the browser.
3. Start a new Copilot chat session.
