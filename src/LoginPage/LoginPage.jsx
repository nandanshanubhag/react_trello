import React from 'react';
import { connect } from 'react-redux';

import './LoginPage.css';
import { auth } from '../actions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      },
      submitted: false
    };
  }

  onValueChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    const isValid = !!value;
    this.setState({ [name]: { ...this.state[name], value, isValid } });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username.value && password.value) {
      this.props.login();
    }
  };

  formControlClass = (control) => {
    const { submitted } = this.state;
    return `form-control ${submitted && !control.isValid ? 'is-invalid' : ''}`;
  };

  render() {
    const { isLoggingIn } = this.props;
    const { username, password, submitted } = this.state;
    console.log(username);

    return (
      <div className="container">
        <div className="login-container col-md-6">
          <form onSubmit={this.onSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="email">Username or Email</label>
              <input
                type="text"
                id="username"
                name="username"
                className={this.formControlClass(username)}
                placeholder="Enter username or email"
                autoComplete="off"
                value={username.value}
                onChange={this.onValueChange}
                required
              />
              {submitted && !username.isValid && (
                <div className="invalid-feedback">
                  Username or Email required
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className={this.formControlClass(password)}
                placeholder="Enter password"
                value={password.value}
                onChange={this.onValueChange}
                required
              />
              {submitted && !password.isValid && (
                <div className="invalid-feedback">Password is required</div>
              )}
            </div>
            <button
              type={isLoggingIn ? 'button' : 'submit'}
              className="btn btn-primary"
            >
              {isLoggingIn ? 'Please wait...' : 'Login'}
            </button>
            <button type="button" className="btn btn-link">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  const {
    authentication: { isLoggingIn }
  } = state;

  return { isLoggingIn };
};

const mapDispatch = (dispatch) => ({
  login: () => {
    dispatch(auth.login());
  }
});

const connection = connect(mapState, mapDispatch)(LoginPage);
export { connection as LoginPage };
