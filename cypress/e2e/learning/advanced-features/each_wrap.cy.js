import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Using Each and Wrap function", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername("csob_cypress")
      .typePassword("Heslo1234")
      .clickLogin()
      .clickProjects();
  });
  it("Checking if all rows in Project table has actions delete and edit", () => {
    cy.get("tbody .listing-table-tr").each((row) => {
      cy.wrap(row).within(() => {
        cy.get('a[title="Delete"]').should("exist");
        cy.get('a[title="Edit"]').should("exist");
      });
    });
  });
});
