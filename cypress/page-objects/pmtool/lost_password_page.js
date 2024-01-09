import { LoginPage } from "./login_page";

export class LostPasswordPage {
  constructor() {
    this.usernameInput = 'input[name="username"]';
    this.emailInput = 'input[name="email"]';
    this.backButton = "#back-btn";
    this.submitButton = 'button[type="submit"]';
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  clickSubmit() {
    cy.get(this.submitButton).click();
    return new LoginPage();
  }

  clickBack() {
    cy.get(this.backButton).click();
    return new LoginPage();
  }
}
