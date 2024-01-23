import { createCustomElement } from "../../helpers/custom_element";
import { TegBDashboardPage } from "./teg_dashboard_page";

export class TegBLoginPage {
  constructor() {
    this.usernameInput = createCustomElement('[data-testid="username"]');
    this.passwordInput = createCustomElement('[data-testid="password"]');
    this.loginButton = createCustomElement('button[data-testid="log_in"]');
    cy.intercept("/auth/login").as("login_api");
    cy.intercept("/accounts/user/**").as("accounts_user_api");
  }

  openApplication() {
    cy.visit(Cypress.env("tegb_url"));
  }

  typeUsername(username) {
    this.usernameInput.get().type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.get().type(password);
    return this;
  }

  clickLogin() {
    this.loginButton.get().click();
    return new TegBDashboardPage();
  }
}
