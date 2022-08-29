const form = document.querySelector('form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('.todo-list');

form.addEventListener('submit', event => {
  event.preventDefault();
  const todoListElem = document.createElement('li');
  // const newTodo = todoInput.value
  const newTodo = form.elements.todoInput.value;
  todoListElem.textContent = newTodo;

  todoListElem.addEventListener('click', event => {
    if (event.target.tagName !== 'LI') {
      return;
    }
    if (todoListElem.style.textDecoration === '') {
      todoListElem.style.textDecoration = 'line-through';
    } else {
      todoListElem.style.textDecoration = '';
    }
  });

  todoInput.value = '';
  todoList.append(todoListElem);
});
