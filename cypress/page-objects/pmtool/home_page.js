import { HeaderSection } from "./header_section";

export class HomePage extends HeaderSection {
  constructor() {
    super();
    this.pageHeader = "#welcome-page-header";
    cy.get(this.pageHeader).should("be.visible");
  }
}
