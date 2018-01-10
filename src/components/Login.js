import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  login = async () => {
    // TODO: Login code here.
  };

  render() {
    return (
      <div>
        <h2>Login to Shortly</h2>
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
        <button onClick={() => this.login()}>Login</button>
      </div>
    );
  }
}

export default Login;
