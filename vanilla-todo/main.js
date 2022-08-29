const form = document.querySelector('form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('.todo-list');

const data = {
  todos: []
};

form.addEventListener('submit', event => {
  event.preventDefault();
  const todoListElem = document.createElement('li');
  // const newTodo = todoInput.value
  const newTodo = {
    note: form.elements.todoInput.value,
    isCompleted: false
  };
  todoListElem.textContent = newTodo.note;
  data.todos.unshift(newTodo);

  todoListElem.addEventListener('click', event => {
    if (event.target.tagName !== 'LI') {
      return;
    }

    if (todoListElem.style.textDecoration === '') {
      todoListElem.style.textDecoration = 'line-through';
      newTodo.isCompleted = true;
    } else {
      todoListElem.style.textDecoration = '';
      newTodo.isCompleted = false;
    }
  });

  todoInput.value = '';
  todoList.append(todoListElem);
});
