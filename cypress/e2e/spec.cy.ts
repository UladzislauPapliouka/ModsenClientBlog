/// <reference types="cypress" />

describe('template spec', () => {
  it('Navigation', () => {
    cy.visit('/');
    cy.get('[data-cy="mobMenu"]').eq(0).click();
    cy.get('[data-cy="LINK_TO_/blog"]').eq(3).click();
    cy.get('[data-cy="mobMenu"]').eq(0).click();
    cy.get('[data-cy="LINK_TO_/contact"]').eq(2).click();
    cy.get('[data-cy="mobMenu"]').eq(0).click();
    cy.get('[data-cy="LINK_TO_/"]').eq(2).click();
  });
  it('Subscribe form', () => {
    cy.visit('/');
    const input = cy.get('[data-cy="FOOTER_INPUT"]');
    input.type('TEST');
    input.should('have.value', 'TEST');
    cy.get('button[data-cy="SUBSCRIBE_BUTTON"]').click();
    cy.get('label').should('contain.text', 'Incorrect email');
    input.clear();
    cy.get('button[data-cy="SUBSCRIBE_BUTTON"]').click();
    cy.get('label').should('contain.text', 'Please enter your email');
  });
  it('Contact form', () => {
    cy.visit('/contact');
    const inputName = cy.get('[data-cy="INPUT_NAME"]');
    const inputEmail = cy.get('[data-cy="INPUT_EMAIL"]');
    const inputMessage = cy.get('[data-cy="INPUT_MESSAGE"]');
    cy.get('button[data-cy="CONTACT_BUTTON"]').click();
    cy.get('label').should('contain.text', 'Please enter your email');
    cy.get('label').should('contain.text', 'Please enter your name');
    inputEmail.type('TEST');
    inputName.type('TEST');
    inputMessage.type(
      'TEN SYMBOLS TEN SYMBOLS TEN SYMBOLS TEN SYMBOLS TEN SYMBOLS TEN SYMBOLS TEN SYMBOLS TEN SYMBOLS TEN SYMBOLS TEN SYMBOLS TEN TEN SYMBOLS SYMBOLS TEN SYMBOLS ',
    );
    cy.get('button[data-cy="CONTACT_BUTTON"]').click();
    cy.get('label').should(
      'contain.text',
      'message must be at most 150 characters',
    );
  });
  it('Category form', () => {
    cy.visit('/categories/economy');
    const search = cy.get('[data-cy="SEARCH"]');
    search.type('Life');
    cy.get('button[data-cy="SEARCH_BTN"]').click();
    cy.get('[data-cy="TAG_Life"]').should(
      'have.css',
      'background-color',
      'rgb(255, 208, 80)',
    );
    search.type('Screen');
    cy.get('button[data-cy="SEARCH_BTN"]').click();
    cy.get('[data-cy="TAG_Screen"]').should(
      'have.css',
      'background-color',
      'rgb(255, 208, 80)',
    );
  });
});
