import { createCustomElement } from "../../helpers/custom_element";
export class AccountsPage {
  constructor() {
    this.pageTitle = createCustomElement('[data-testid="title"]');
  }

  waitForAccountLoad() {
    cy.wait("@accounts_user_api");
    return this;
  }
}
