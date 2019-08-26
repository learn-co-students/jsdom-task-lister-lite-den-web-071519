document.addEventListener("DOMContentLoaded", () => {

  const taskList = new TaskList();

  const taskForm = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description");

  const newTaskList = document.getElementById("tasks");

  const renderApp = () => (newTaskList.innerHTML = taskList.renderTasks())

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(taskDescription.value);
    e.target.reset();
    renderApp();
  });

  newTaskList.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });
});
