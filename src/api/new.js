const { API_HOST, API_PORT } = process.env;

class New {
  constructor(path) {
    this.path = path;
    this.api_url = 'http://localhost:3000/api';
    if (API_HOST != null) this.api_url = `http://${API_HOST}:${API_PORT}/api`;
  }

  get() {
    return new Promise((resolve, reject) => {
      fetch(`${this.api_url}/new/${this.path}`)
        .then((res) => {
          if (!res.ok) throw new Error('New not found!');
          return res.json();
        })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }
}

export default { New };
