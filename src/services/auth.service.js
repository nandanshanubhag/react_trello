import fetch from 'cross-fetch';

const login = (email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', accept: '' },
    body: JSON.stringify({ email, password })
  };
  return fetch('http://localhost:3001/api/users/login', options).then(
    handleResponse
  );
};

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export const authService = {
  login
};
