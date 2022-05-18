import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  async fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      const users = await response.json();
      this.setState({
        users,
        isLoading: false
      });
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
