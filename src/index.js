document.addEventListener("DOMContentLoaded", () => {
  
  //prevent page reload (post)
  const button = document.querySelector('input[type="submit"]')
  button.addEventListener("click", function(e) {
    e.preventDefault()

    //get new input
    let new_item =  document.getElementById('new-task-description').value
    li = document.createElement('li')
    li.innerText = new_item

    //add to list
    list = document.getElementById('list')
    ul = list.children[1]
    ul.append(li)
  })


});
