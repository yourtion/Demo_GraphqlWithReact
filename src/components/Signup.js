import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  signup = async () => {
    // TODO: Signup code here.
  };

  render() {
    return (
      <div>
        <h2>Yourtion Shortly</h2>
        <input
          id="email"
          type="text"
          value={this.state.email}
          placeholder="Email address"
          onChange={e => this.setState({ email: e.target.value })}
        />
        <br />
        <input
          id="password"
          type="password"
          value={this.state.password}
          placeholder="Password"
          onChange={e => this.setState({ password: e.target.value })}
        />
        <br />
        <button onClick={() => this.signup()}>Signup</button>
      </div>
    );
  }
}

export default Signup;
