import { Request } from "../utils/request";

export type PersonObject = {
  details: {
    knowsLanguage: string[],
    profilePhotoUrl: string,
    bio: string,
    nationality: string,
    gender: number
  },
  _id: string,
  firstName: string,
  familyName: string,
  username: string,
  email: string
}

export default class Person {
  constructor(username: string, id: string);
  id: string;
  username: string;
  request: Request;
  get(): Promise<PersonObject>;
}
