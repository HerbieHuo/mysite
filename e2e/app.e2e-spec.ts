import { MysitePage } from './app.po';

describe('mysite App', function() {
  let page: MysitePage;

  beforeEach(() => {
    page = new MysitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
