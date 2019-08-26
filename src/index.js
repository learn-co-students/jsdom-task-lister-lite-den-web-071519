document.addEventListener("DOMContentLoaded", () => {
    const newTaskForm = document.querySelector('#create-task-form');
    // const newTaskDescription = document.querySelector('#new-task-description');
    // const newTaskPriority = document.querySelector('#new-task-priority');

    // const taskList = document.querySelector('#tasks');

    newTaskForm.addEventListener("submit", createNewTask);
});

function createNewTask(event) {
    event.preventDefault();

    const newTaskDescription = document.querySelector('#new-task-description');
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;

    document.getElementById("tasks").appendChild(newTask);
    event.target.reset();
}