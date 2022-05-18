import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.fetchTodos = this.fetchTodos.bind(this);
  }

  async fetchTodos() {
    try {
      const response = await fetch('/api/todos');
      const todos = await response.json();
      this.setState({
        todos
      });
    } catch (err) {
      console.error(err);
    }

  }

  componentDidMount() {
    this.fetchTodos();
  }

  async addTodo(newTodo) {
    const todosCopy = this.state.todos.slice();
    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo)
      });
      const todo = await response.json();
      todosCopy.push(todo);
      this.setState({
        todos: todosCopy
      });
    } catch (err) {
      console.error(err);
    }
  }

  async toggleCompleted(todoId) {
    const todosCopy = this.state.todos.slice();
    let todoIndex = null;
    const matchingTodo = todosCopy.find((todo, index) => {
      todoIndex = index;
      return todo.todoId === todoId;
    });
    try {
      const response = await fetch(`/api/todos/${todoId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isCompleted: !matchingTodo.isCompleted })
      });
      const newTodo = await response.json();
      todosCopy.splice(todoIndex, 1, newTodo);
      this.setState({
        todos: todosCopy
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
