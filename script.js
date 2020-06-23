//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo);

//functions

function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check Mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton);
    //trashbutton
    const TrashButton = document.createElement("button");
    TrashButton.innerHTML = '<i class="fas fa-trash"></i>'
    TrashButton.classList.add("trash-btn")
    todoDiv.appendChild(TrashButton);
    //appendtoList
    todoList.appendChild(todoDiv);
    //clearinputvalue
    todoInput.value = '';
}
