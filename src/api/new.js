import { Request, get } from '../utils/request';

const API_URL = 'http://localhost:3000';
export default class New {
  constructor(path) {
    this.path = path;
    this.request = new Request(API_URL);
  }

  static catalog() {
    return get(`${API_URL}/catalog`);
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
