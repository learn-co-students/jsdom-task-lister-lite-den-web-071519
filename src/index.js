document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("click", function(event) {
    event.preventDefault();
  let userInput = document.getElementById("new-task-description").value;
  let element = document.createElement("LI");
  element.textContent = userInput;
  document.getElementById("tasks").append(element);
  })
});