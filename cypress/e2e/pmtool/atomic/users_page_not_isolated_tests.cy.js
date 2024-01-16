import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { UsersPage } from "../../../page-objects/pmtool/users_page";

describe("Users page atomic tests", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
    new UsersPage().visit();
  });

  context("Title tests", () => {
    it("Title is visible", () => {
      new UsersPage().pageTitleIsVisible();
    });

    it("Title has text", () => {
      new UsersPage().pageTitleHasText("Users");
    });
  });

  context("Add user button tests", () => {
    it("Add user button is visible", () => {
      new UsersPage().addUserButtonIsVisible();
    });

    it("Add user button has text", () => {
      new UsersPage().addUserButtonHasText("Add User");
    });
  });
});
