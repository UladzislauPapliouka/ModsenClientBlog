/// <reference types="cypress" />
import { wait } from 'next/dist/build/output/log';

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('[data-cy="mobMenu"]').eq(0).click();
    cy.get('[data-cy="LINK_TO_/blog"]').eq(2).click();
    cy.get('[data-cy="mobMenu"]').eq(0).click();
    cy.get('[data-cy="LINK_TO_/contact"]').eq(2).click();
    cy.get('[data-cy="mobMenu"]').eq(0).click();
    cy.get('[data-cy="LINK_TO_/"]').eq(2).click();
  });
});
