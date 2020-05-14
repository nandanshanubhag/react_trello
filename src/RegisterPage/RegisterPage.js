import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { connect } from 'react-redux';
import { auth } from '../actions';

class RegisterPage extends React.Component {
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
      confirmPassword: {
        value: '',
        isValid: false
      },
      submitted: false
    };
  }

  onValueChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    let isValid;
    const { submitted } = this.state;
    if (submitted) {
      isValid = this.checkIfValid(name, value);
    }
    this.setState({ [name]: { ...this.state[name], value, isValid } });
  };

  checkIfValid = (name, value) => {
    if (name === 'email') {
      return validator.isEmail(value);
    }
    if (name === 'confirmPassword') {
      return value === this.state.password.value;
    }
    return !!value;
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
    const { email, password, confirmPassword } = this.state;
    if (email.isValid && password.isValid && confirmPassword.isValid) {
      if (password.value === confirmPassword.value) {
        this.props.signup();
      }
    }
  };

  formControlClass = (control) => {
    const { submitted } = this.state;
    return `form-control ${submitted && !control.isValid ? 'is-invalid' : ''}`;
  };

  render() {
    const { registering } = this.props;
    const { email, password, confirmPassword, submitted } = this.state;
    return (
      <div className="container">
        <div className="login-container col-md-6">
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
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={this.formControlClass(confirmPassword)}
                placeholder="Enter Confirm password"
                value={confirmPassword.value}
                onChange={this.onValueChange}
                required
              />
              {submitted && !confirmPassword.value && (
                <div className="invalid-feedback">
                  Confirm Password is required
                </div>
              )}
              {submitted &&
                confirmPassword.value &&
                !confirmPassword.isValid && (
                  <div className="invalid-feedback">
                    Password does not match
                  </div>
                )}
            </div>
            <button
              type={registering ? 'button' : 'submit'}
              className="btn btn-primary"
            >
              {registering ? 'Please wait...' : 'Sign up'}
            </button>
            <Link to="/login" className="btn btn-link">
              Login
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProp = ({ authentication }) => {
  const { registering } = authentication;

  return { registering };
};

const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch(auth.signUp())
});

const connection = connect(mapStateToProp, mapDispatchToProps)(RegisterPage);
export { connection as RegisterPage };
