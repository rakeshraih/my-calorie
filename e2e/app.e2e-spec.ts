import { NgLearningPage } from './app.po';

describe('ng-learning App', () => {
  let page: NgLearningPage;

  beforeEach(() => {
    page = new NgLearningPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
