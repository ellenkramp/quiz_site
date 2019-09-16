describe('The Home Page', function () {
  it('successfully loads', function () {
    cy.visit('/');
  });
  it('contains start button', function () {
    const Button = cy.get('button');
    Button.contains('Start the Quiz');
  });
  it('proceeds to quiz', function () {
    const Button = cy.get('button');
    Button.click();
  });
})

describe('The Quiz Page', function () {
  it('successfully loads', function () {
    cy.visit('/quiz')
  });
  it('contains choices', function () {
    cy.get('[type="radio"]').first().check();
  });
  it('contains a button', function () {
    const Button = cy.get('button');
  });
  it('navigates to successive screens', function () {
    const Button = cy.get('button');
    Button.click();
  })
})
