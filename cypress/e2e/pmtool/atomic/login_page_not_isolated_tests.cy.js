import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Login Page Atomic Tests", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    new LoginPage().openPmtool();
  });

  context("Username input tests", () => {
    it("Username is visible", () => {
      new LoginPage().usernameIsVisible();
    });
    it("Username has placeholder", () => {
      new LoginPage().usernameHasPlaceholder("Username");
    });
    it("Username is editable", () => {
      new LoginPage().usernameIsEditable("Borec");
    });
  });
  context("Password input tests", () => {
    it("Password is visible", () => {
      new LoginPage().passwordIsVisible();
    });
    it("Password has placeholder", () => {
      new LoginPage().passwordHasPlaceholder("Password");
    });
    it("Password is editable", () => {
      new LoginPage().passwordIsEditable("Borec");
    });
  });
});
