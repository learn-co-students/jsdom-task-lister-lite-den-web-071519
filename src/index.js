const form = document.getElementById('create-task-form')
form.addEventListener("submit", function(event) {

  event.preventDefault();

  let input = document.getElementById('new-task-description');
  let item = document.createElement('li');
  let deleteItem = document.createElement('span');

  item.textContent = input.value
  deleteItem.textContent = "x"
  deleteItem.style = "margin-left:3px;padding:3px;border:1px solid black;cursor:pointer;"
  deleteItem.className = "delete"

  item.appendChild(deleteItem)

  let tasks = document.getElementById('tasks');
  tasks.appendChild(item);

  deleteItem.addEventListener("click", function(event) {
      event.preventDefault();
      tasks.removeChild(item)
  });

});
