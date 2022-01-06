import requestFromAPI from '../utils/request';

type Gender = 0 | 1 | 2;
type Lang = 'pt' | 'en';
type Nationality = 'BR' | 'US';
type Roles = 'editor' | 'journalist' | 'commenter';

export interface IPerson {
  _id: string;
  details: {
    bio: string;
    gender: Gender;
    knowsLanguage: Lang[];
    nationality: Nationality;
    profilePhotoUrl: string;
  }
  email: string;
  familyName: string;
  firstName: string;
  roles: Roles[];
  username: string;
}

interface NamedParameters {
  username?: IPerson['username'],
  id?: IPerson['_id'],
}

export class Person {
  id?: NamedParameters['id'];

  username?: NamedParameters['username'];

  constructor({ username, id }: NamedParameters) {
    this.id = id;
    this.username = username;
  }

  get(): Promise<IPerson> {
    if (this.username !== undefined) return requestFromAPI(`person/get?username=${this.username}`);
    return requestFromAPI(`person/get?id=${this.id}`);
  }
}
