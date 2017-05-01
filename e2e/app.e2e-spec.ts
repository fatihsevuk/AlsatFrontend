import { AlsatFrontendPage } from './app.po';

describe('alsat-frontend App', () => {
  let page: AlsatFrontendPage;

  beforeEach(() => {
    page = new AlsatFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
