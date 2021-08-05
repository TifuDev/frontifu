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
      this.request.get(`new/${this.path}`)
        .then((res) => {
          const parsed = res.newObj;
          parsed.date = new Date(Date.parse(parsed.date));

          resolve(parsed);
        })
        .catch((err) => reject(err));
    });
  }
}
