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
    return this.request.get(`new/${this.path}`);
  }
}
