import requestFromAPI from '../utils/request';

export default class Person {
  constructor(username, id) {
    this.id = id;
    this.username = username;
  }

  get() {
    if (this.username !== null) return requestFromAPI(`person/get?username=${this.username}`);
    return requestFromAPI(`person/get?id=${this.id}`);
  }
}
