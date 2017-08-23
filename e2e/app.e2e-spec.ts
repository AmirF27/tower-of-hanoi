import { TowerOfHanoiPage } from './app.po';

describe('tower-of-hanoi App', () => {
  let page: TowerOfHanoiPage;

  beforeEach(() => {
    page = new TowerOfHanoiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
