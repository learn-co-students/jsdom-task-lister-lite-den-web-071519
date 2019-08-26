document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelectorAll('input')[1].addEventListener('click', function(event) {
    event.preventDefault()
    console.log(document.getElementById('new-task-description').value)
    let ul = document.getElementById('list')
    let li = document.createElement('li')
    li.textContent = document.getElementById('new-task-description').value

    ul.appendChild(li)
  })
});
