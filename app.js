"use strict";

const STORAGE_KEY = "team-task-board.tasks";

const sampleTasks = [
  { id: "sample-1", title: "Prepare release notes", completed: false, createdAt: 1 },
  { id: "sample-2", title: "Review test results", completed: false, createdAt: 2 },
  { id: "sample-3", title: "Update project documentation", completed: true, createdAt: 3 }
];

const elements = {
  form: document.querySelector("#task-form"),
  titleInput: document.querySelector("#task-title"),
  formMessage: document.querySelector("#form-message"),
  openTaskList: document.querySelector("#open-task-list"),
  completedTaskList: document.querySelector("#completed-task-list"),
  openEmptyState: document.querySelector("#open-empty-state"),
  completedEmptyState: document.querySelector("#completed-empty-state"),
  openCount: document.querySelector("#open-count"),
  completedCount: document.querySelector("#completed-count"),
  resetButton: document.querySelector("#reset-button"),
  taskTemplate: document.querySelector("#task-item-template")
};

let tasks = loadTasks();
render();

elements.form.addEventListener("submit", handleAddTask);
elements.resetButton.addEventListener("click", resetDemoData);

function handleAddTask(event) {
  event.preventDefault();

  const title = elements.titleInput.value.trim();
  if (!title) {
    elements.formMessage.textContent = "Enter a task description.";
    elements.titleInput.focus();
    return;
  }

  tasks.push({
    id: createId(),
    title,
    completed: false,
    createdAt: Date.now()
  });

  elements.form.reset();
  elements.formMessage.textContent = "";
  saveAndRender();
  elements.titleInput.focus();
}

function toggleTask(taskId) {
  const task = tasks.find(candidate => candidate.id === taskId);
  if (!task) return;

  task.completed = !task.completed;
  saveAndRender();
}

function deleteTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
  saveAndRender();
}

function render() {
  const openTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  renderTaskList(openTasks, elements.openTaskList);
  renderTaskList(completedTasks, elements.completedTaskList);

  elements.openCount.textContent = String(openTasks.length);
  elements.completedCount.textContent = String(completedTasks.length);
  elements.openEmptyState.hidden = openTasks.length > 0;
  elements.completedEmptyState.hidden = completedTasks.length > 0;
}

function renderTaskList(taskItems, targetList) {
  targetList.replaceChildren();

  for (const task of taskItems) {
    const fragment = elements.taskTemplate.content.cloneNode(true);
    const listItem = fragment.querySelector(".task-item");
    const checkbox = fragment.querySelector(".task-checkbox");
    const title = fragment.querySelector(".task-title");
    const deleteButton = fragment.querySelector(".delete-button");

    title.textContent = task.title;
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", `Mark ${task.title} as ${task.completed ? "open" : "completed"}`);
    deleteButton.setAttribute("aria-label", `Delete ${task.title}`);

    if (task.completed) listItem.classList.add("is-completed");

    checkbox.addEventListener("change", () => toggleTask(task.id));
    deleteButton.addEventListener("click", () => deleteTask(task.id));
    targetList.append(fragment);
  }
}

function loadTasks() {
  try {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    if (!storedValue) return cloneSampleTasks();

    const parsedTasks = JSON.parse(storedValue);
    return Array.isArray(parsedTasks) ? parsedTasks : cloneSampleTasks();
  } catch (error) {
    console.warn("Could not load saved tasks. Demo data will be used.", error);
    return cloneSampleTasks();
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function saveAndRender() {
  saveTasks();
  render();
}

function resetDemoData() {
  tasks = cloneSampleTasks();
  saveAndRender();
  elements.formMessage.textContent = "Demo data restored.";
}

function cloneSampleTasks() {
  return sampleTasks.map(task => ({ ...task }));
}

function createId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `task-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
