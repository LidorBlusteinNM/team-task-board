# Reality Check Examples

## Hallucinated API

“Update TaskStorageService.loadTasks() to assign Medium priority
to legacy tasks.”

Reality:
TaskStorageService does not exist. The actual loading code is in app.js.

## Invented Requirement

“Added an Edit Priority button so priority can be changed after
task creation.”

Reality:
Editing priority is explicitly excluded.

## Scope Expansion

“Added package.json, Vite, and a component library.”

Reality:
The application must remain dependency-free and work by opening
index.html directly.

## Unnecessary Refactoring

“Renamed the existing render and storage functions and reorganized
unrelated CSS while implementing priority.”

Reality:
Those changes are not required by any acceptance criterion.

## Overengineering

“Added PriorityBase, three priority subclasses, PriorityFactory,
PriorityComparator, and PriorityFilterStrategy.”

Reality:
The current feature has three fixed values and does not require
a class hierarchy.

## Weak Verification

“Verified that the page opens and a task can be added.”

Reality:
This does not verify sorting, filtering, summary behavior,
persistence, legacy data, or safe rendering.

## Blind Acceptance

“All requirements have been implemented and verified successfully.”

Reality:
No browser behavior, saved data, diff, or console output has been
personally inspected.