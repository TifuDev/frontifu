import requestFromAPI from '../utils/request';

export interface IPerson {
  _id: string;
  details: {
    bio: string;
    gender: number;
    knowsLanguage: string[];
    nationality: string;
    profilePhotoUrl: string;
  }
  email: string;
  familyName: string;
  firstName: string;
  roles: string[];
  username: string;
}

export class Person {
  id: string;

  username: string | null;

  // null is a type because new.ts uses it as null when importing a new
  constructor(username: string | null, id: string) {
    this.id = id;
    this.username = username;
  }

  get(): Promise<Person> {
    if (this.username !== null) return requestFromAPI(`person/get?username=${this.username}`);
    return requestFromAPI(`person/get?id=${this.id}`);
  }
}
