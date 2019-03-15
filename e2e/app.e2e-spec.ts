import { EprPage } from './app.po';

describe('epr App', () => {
  let page: EprPage;

  beforeEach(() => {
    page = new EprPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
