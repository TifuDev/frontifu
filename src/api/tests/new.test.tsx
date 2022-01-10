import { New, INew } from '../new';

describe('New methods', () => {
  let catalog: INew[];

  it('should return catalog', async () => {
    catalog = await New.catalog();

    console.info(`Returned news: ${catalog.length}`);
    expect(catalog.length).toBeGreaterThan(0);
  });

  it('should return a new', () => {
    console.info(`getting new ${catalog[0].path}`);
    return expect(new New(catalog[0].path).get()).resolves.not.toBe(null);
  });
});
