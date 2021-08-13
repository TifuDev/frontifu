import { Request } from '../utils/request';

const API_URL = 'http://localhost:3000';

export default class Person {
  constructor(username, id) {
    this.id = id;
    this.username = username;

    this.request = new Request(API_URL);
  }

  get() {
    if (!this.username === null) return this.request.get(`person/get?username=${this.username}`);
    return this.request.get(`person/get?id=${this.id}`);
  }
}
