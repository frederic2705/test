/**
 * NPM import
 */
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
    };

    axios({
      method:'post',
      url:'http://127.0.0.1:8001/api/users',
      responseType:'json'
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
          user,
        });
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

/**
 * Export
 */
export default App;
