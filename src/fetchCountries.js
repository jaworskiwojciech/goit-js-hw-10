const BASE_URL = 'https://restcountries.com/v3.1/name';

const fetchCountries = (name) => {
  return fetch(
    `${BASE_URL}/${name}?fields=name,capital,population,flags,languages`
  ).then(resp => {
    if (resp.status === 404) {
      return Promise.reject(new Error());
    }
    return resp.json();
  });
};

export { fetchCountries };
