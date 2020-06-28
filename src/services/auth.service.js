import fetch from 'cross-fetch';

const handleResponse = (response) => {
  console.log('response', response);

  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    console.log('data', data);

    if (!response.ok) {
      if (response.status === 401) {
      }

      const error = data || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

const login = async (email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };
  const response = await fetch(
    'http://localhost:3001/api/users/login',
    options
  );
  return handleResponse(response);
};

const register = async (email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };
  const response = await fetch('http://localhost:3001/api/users', options);
  return handleResponse(response);
};

export const authService = {
  login,
  register
};
