import { Request, get } from '../utils/request';
import Person from './person';

const API_URL = 'http://localhost:3000';
export default class NewAPI {
  constructor(path) {
    this.path = path;
    this.request = new Request(API_URL);
  }

  static catalog(q) {
    if (q) return get(`${API_URL}/catalog?q=${q}`);

    return get(`${API_URL}/catalog`);
  }

  get() {
    return new Promise((resolve, reject) => {
      this.request.get(`new/${this.path}`)
        .then((res) => {
          const parsed = res;

          new Person(null, res.author).get()
            .then((person) => {
              parsed.author = person;
              parsed.date = new Date(Date.parse(parsed.date));

              resolve(parsed);
            });
        })
        .catch((err) => reject(err));
    });
  }
}
