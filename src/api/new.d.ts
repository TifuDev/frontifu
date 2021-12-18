export type NewsObject = {
  metadata: {
    keywords: string[],
    isBasedOn: string,
    accessMode: string,
    thumbnailUrl: string,
    inLanguage: string,
  },
  _id: number,
  title: string,
  desc: string,
  path: string,
  author: string
  date: Date,
  dateLastMod: Date,
  downloads: number,
  content: string
}

export default class New {
  static catalog(q: string): any;
  constructor(path: string);
  path: string;
  get(): Promise<NewsObject>;
}
