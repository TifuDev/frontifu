import requestFromAPI from '../utils/request';
import { IPerson, Person } from './person';

export interface INew {
  _id: number;
  author: IPerson;
  comments: object[];
  date: Date;
  dateLastMod: Date | null;
  desc: string;
  downloads: number;
  editors: string[];
  metadata: {
    thumbnailUrl: string;
    inLanguage: string;
    accessMode: string;
    keywords: string[];
    isBasedOn: string[];
  };
  path: string;
  pullRequest: any[];
  reactions: Array<Array<string>>;
  title: string;
  content?: string;
}

export class New {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  static catalog(q?: string): Promise<INew[]> {
    if (q) return requestFromAPI(`catalog?q=${q}`);

    return requestFromAPI('catalog');
  }

  get(): Promise<INew> {
    return new Promise((resolve, reject) => {
      requestFromAPI(`new/${this.path}`)
        .then((res) => {
          const parsed = res;

          new Person({ id: parsed.author }).get().then((person) => {
            parsed.author = person;
            parsed.date = new Date(Date.parse(parsed.date));

            resolve(parsed);
          });
        })
        .catch((err) => reject(err));
    });
  }
}
