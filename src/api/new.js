const { API_HOST, API_PORT } = process.env;

let API_URL = 'http://localhost:3000';
if (API_HOST !== undefined) API_URL = `http://${API_HOST}:${API_PORT}`;
export default class New {
  constructor(path) {
    this.path = path;
  }

  static catalog() {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/catalog`)
        .then((res) => {
          if (!res.ok) throw new Error('An unexpected error occured. See the API documentation to know how to solve.');
          return res.json();
        })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  get() {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/new/${this.path}`)
        .then((res) => {
          if (!res.ok) throw new Error('New not found!');
          return res.json();
        })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }
}
