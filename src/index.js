document.addEventListener("DOMContentLoaded", () => {
  
const button = document.querySelector('input[type="submit"]')
button.addEventListener("click", function(e) {
  e.preventDefault()




  //make a new task
  let newTask = document.getElementById('new-task-description').value
  li = document.createElement('li')
  li.innerText = newTask

  //add to list
  list = document.getElementById('list')
  ul = list.children[1]
  ul.append(li)
  })
});





