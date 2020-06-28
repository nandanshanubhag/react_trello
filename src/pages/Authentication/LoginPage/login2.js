import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import validator from 'validator';

import { useAuthContext, loginSuccess } from '../AuthContext';
import { authService } from '../../../services/auth.service';

export const LoginPage2 = () => {
  const { auth, dispatch } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState({
    value: '',
    isValid: false
  });
  const [password, setPassword] = useState({
    value: '',
    isValid: false
  });

  const onEmailChange = (email) => {
    const isValid = checkIsValid('email', email);
    setEmail({ value: email, isValid });
  };

  const onPasswordChange = (password) => {
    const isValid = checkIsValid('password', password);
    setPassword({ value: password, isValid });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (email.isValid && password.isValid) {
      setLoginError(null);
      setLoading(true);
      authService
        .login(email.value, password.value)
        .then(({ user }) => {
          dispatch(loginSuccess(user));
        })
        .catch((error) => {
          setLoginError(error.message || 'Failed to Login');
        });
    }
  };

  const checkIsValid = (name, value) => {
    if (name === 'email') {
      return validator.isEmail(value);
    }
    return !!value;
  };

  const formControlClass = (control) => {
    return `form-control ${submitted && !control.isValid ? 'is-invalid' : ''}`;
  };

  return (
    <div className="container">
      <div className="login-container col-md-6">
        {loginError && (
          <div className="alert alert-danger" role="alert">
            {loginError}
          </div>
        )}
        {auth.registered && auth.message && (
          <div className="alert alert-success" role="alert">
            {auth.message}
          </div>
        )}
        <div className="title">Login</div>
        <form onSubmit={onSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={formControlClass(email)}
              placeholder="Enter email"
              autoComplete="off"
              value={email.value}
              onChange={(e) => onEmailChange(e.target.value)}
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
              className={formControlClass(password)}
              placeholder="Enter password"
              value={password.value}
              onChange={(e) => onPasswordChange(e.target.value)}
              required
            />
            {submitted && !password.value && (
              <div className="invalid-feedback">Password is required</div>
            )}
          </div>
          <button
            type={false ? 'button' : 'submit'}
            className="btn btn-primary"
          >
            {false ? 'Please wait...' : 'Login'}
          </button>
          <Link to="/register" className="btn btn-link">
            Register
          </Link>
        </form>
      </div>
    </div>
  );
};
