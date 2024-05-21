const BASE_URL = 'https://api.github.com';

const apiGet = async queryString => {
  const response = await fetch(`${BASE_URL}/users${queryString}`);
  const body = await response.json();

  return body;
};

export const searchForUser = query => apiGet(`/${query}`);

export const getRepoByName = loginName => apiGet(`/${loginName}/repos`);
