import { HeaderSection } from "./header_section";

export class UsersPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=1");
    this.pageTitle = ".page-title";
    // cy.get(this.pageTitle).should("contain.text", "Users");
    this.addUserButton = "button[test_id='Add User']";
  }

  pageTitleIsVisible() {
    cy.get(this.pageTitle).should("be.visible");
    return this;
  }

  pageTitleHasText(text) {
    cy.get(this.pageTitle).should("have.text", text);
    return this;
  }

  addUserButtonIsVisible() {
    cy.get(this.addUserButton).should("be.visible");
    return this;
  }

  addUserButtonHasText(text) {
    cy.get(this.addUserButton).should("have.text", text);
    return this;
  }
}
