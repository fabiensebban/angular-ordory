import { AngularOrdoryPage } from './app.po';

describe('angular-ordory App', () => {
  let page: AngularOrdoryPage;

  beforeEach(() => {
    page = new AngularOrdoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
