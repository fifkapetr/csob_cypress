import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Chai Tests", () => {
  it("Login header has text 'Login'", () => {
    new LoginPage().openPmtool();
    cy.get("h3.form-title").should("have.text", "Login");
  });
  // ! Failing
  it.skip('Login header has text "Login2"', () => {
    new LoginPage().openPmtool();
    cy.get("h3.form-title").should("have.text", "Login2");
  });

  it('Login header contain text "Logi"', () => {
    new LoginPage().openPmtool();
    cy.get("h3.form-title").should("contain.text", "Logi");
  });

  it('Username input has value "username"', () => {
    new LoginPage().openPmtool();
    cy.get("#username").type("username").should("have.value", "username");
  });

  it('Email in Lost Password has text "email"', () => {
    new LoginPage().openPmtool().clickLostPassword();
    cy.get('input[name="email"]').type("email");
    cy.get('input[name="email"]').should("have.value", "email");
  });

  it('Username input has "form-control" class', () => {
    new LoginPage().openPmtool();
    cy.get("#username").should("have.class", "form-control");
  });

  it("Login Button is visible", () => {
    new LoginPage().openPmtool();
    cy.get(".btn").should("be.visible").should("exist");
  });

  it("Username has placeholder 'Username", () => {
    new LoginPage().openPmtool();
    cy.get("#username").should("have.attr", "placeholder", "Username");
  });

  it.only('Password has placeholder "Password"', () => {
    new LoginPage().openPmtool();
    cy.get("#password").should("have.attr", "placeholder", "Password");
  });
});
