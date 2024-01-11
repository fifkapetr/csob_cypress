import { HeaderSection } from "./header_section";

export class UsersPage extends HeaderSection {
  constructor() {
    super();
    this.pageTitle = ".page-title";
    cy.get(this.pageTitle).should("contain.text", "Users");
  }
}
