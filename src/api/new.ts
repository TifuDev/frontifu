import requestFromAPI from '../utils/request';
import Person from './person';

export default class NewAPI {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  static catalog(q: string): Promise<any> {
    if (q) return requestFromAPI(`catalog?q=${q}`);

    return requestFromAPI('catalog');
  }

  get(): Promise<any> {
    return new Promise((resolve, reject) => {
      requestFromAPI(`new/${this.path}`)
        .then((res) => {
          const parsed = res.newObj;

          new Person(null, parsed.author).get()
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
