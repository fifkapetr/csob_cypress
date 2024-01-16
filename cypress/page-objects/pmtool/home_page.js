import { HeaderSection } from "./header_section";

export class HomePage extends HeaderSection {
  constructor() {
    super("module=dashboard/dashboard");
    this.pageHeader = "#welcome-page-header";
    // ! This will not work with direct opening
    // cy.get(this.pageHeader).should("be.visible");
    // * This is solution to have check in constructor. isOpen have to be inserted as constructor parameter
    // if (isOpen) {
    //   cy.get(this.pageHeader).should("be.visible");
    // }
  }
}
