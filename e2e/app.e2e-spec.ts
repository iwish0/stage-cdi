import { ExtranetDocusharePage } from './app.po';

describe('extranet-docushare App', () => {
  let page: ExtranetDocusharePage;

  beforeEach(() => {
    page = new ExtranetDocusharePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
