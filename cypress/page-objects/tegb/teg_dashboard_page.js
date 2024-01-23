import { createCustomElement } from "../../helpers/custom_element";
import { AccountsPage } from "./accounts_page";

export class TegBDashboardPage {
  constructor() {
    this.accountsLink = createCustomElement(
      '[data-testid="accounts_section_link"]'
    );
  }

  waitForLoginApi() {
    cy.wait("@login_api");
    return this;
  }

  clickAccounts() {
    this.accountsLink.get().click();
    return new AccountsPage();
  }
}
