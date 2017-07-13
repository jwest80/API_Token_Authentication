import { CliExamplePage } from './app.po';

describe('cli-example App', () => {
  let page: CliExamplePage;

  beforeEach(() => {
    page = new CliExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
