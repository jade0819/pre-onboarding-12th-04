import axios from 'axios';

export class HttpClient {
  #baseURL;

  constructor(baseURL) {
    this.#baseURL = baseURL;
  }

  get(url, options = {}) {
    return axios.get(this.#baseURL + url, {
      ...options,
      headers: {
        ...options.headers,
      },
    });
  }
}
