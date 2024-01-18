import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../../page-objects/pmtool/projects_page";

describe(
  "Projects Page atomic tests using custom element",
  { testIsolation: false },
  () => {
    before(() => {
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
      cy.clearAllSessionStorage();
      new LoginPage()
        .openPmtool()
        .typeUsername(Cypress.env("pmtool_username"))
        .typePassword(Cypress.env("pmtool_password"))
        .clickLogin();
      new ProjectsPage().visit();
    });

    it("Search input is visible", () => {
      new ProjectsPage().searchInput.isVisible();
    });

    it("Search input has placeholder", () => {
      new ProjectsPage().searchInput.hasPlaceholder("Search");
    });

    it("Search input is editable", () => {
      const searchText = "text1234";
      new ProjectsPage()
        .typeSearchInput(searchText)
        .searchInput.hasValue(searchText);
    });
  }
);
