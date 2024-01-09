import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Mocha Tests", () => {
  beforeEach(() => {
    cy.viewport(800, 600);
    cy.log("Runs before every test");
  });

  it("Visit pmtool", () => {
    new LoginPage().openPmtool();
  });

  it("Visit pmtool and login", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("csob_cypress")
      .typePassword("Heslo1234")
      .clickLogin();
  });

  afterEach(() => {
    cy.log("Function afterEach called");
  });
});
