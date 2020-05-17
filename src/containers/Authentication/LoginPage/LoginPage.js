import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import './LoginPage.css';
import { auth } from '../../../actions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
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
    const isValid = this.checkIfValid(name, value);

    this.setState({ [name]: { ...this.state[name], value, isValid } });
  };

  checkIfValid = (name, value) => {
    if (name === 'email') {
      return validator.isEmail(value);
    }
    return !!value;
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email.isValid && password.isValid) {
      this.props.login(email.value, password.value);
    }
  };

  formControlClass = (control) => {
    const { submitted } = this.state;
    return `form-control ${submitted && !control.isValid ? 'is-invalid' : ''}`;
  };

  render() {
    const {
      loggingIn,
      message,
      registered,
      loginFailed
    } = this.props.authentication;
    const { email, password, submitted } = this.state;

    return (
      <div className="container">
        <div className="login-container col-md-6">
          {loginFailed && message && (
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          )}
          {registered && message && (
            <div className="alert alert-success" role="alert">
              {message}
            </div>
          )}
          <div className="title">Login</div>
          <form onSubmit={this.onSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={this.formControlClass(email)}
                placeholder="Enter email"
                autoComplete="off"
                value={email.value}
                onChange={this.onValueChange}
                required
              />
              {submitted && !email.value && (
                <div className="invalid-feedback">Email is required</div>
              )}
              {submitted && email.value && !email.isValid && (
                <div className="invalid-feedback">Enter a valid email</div>
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
              {submitted && !password.value && (
                <div className="invalid-feedback">Password is required</div>
              )}
            </div>
            <button
              type={loggingIn ? 'button' : 'submit'}
              className="btn btn-primary"
            >
              {loggingIn ? 'Please wait...' : 'Login'}
            </button>
            <Link to="/register" className="btn btn-link">
              Register
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProp = ({ authentication }) => {
  return { authentication };
};

const mapDispatchToProps = {
  login: auth.login
};

const connection = connect(mapStateToProp, mapDispatchToProps)(LoginPage);
export { connection as LoginPage };
