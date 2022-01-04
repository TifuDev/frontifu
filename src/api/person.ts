import requestFromAPI from '../utils/request';

export default class Person {
  id: string;

  username: string | null;

  // null is a type because new.ts uses it as null when importing a new
  constructor(username: string | null, id: string) {
    this.id = id;
    this.username = username;
  }

  get(): Promise<any> {
    if (this.username !== null) return requestFromAPI(`person/get?username=${this.username}`);
    return requestFromAPI(`person/get?id=${this.id}`);
  }
}
