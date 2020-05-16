import fetch from 'cross-fetch';

const handleResponse = (response) => {
  console.log('response', response);

  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    console.log('data', data);

    if (!response.ok) {
      if (response.status === 401) {
      }

      const error = (data && data.error) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

const login = (email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };
  return fetch('http://localhost:3001/api/users/login', options).then(
    handleResponse
  );
};

const register = (email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };
  return fetch('http://localhost:3001/api/users', options).then(handleResponse);
};

export const authService = {
  login,
  register
};
