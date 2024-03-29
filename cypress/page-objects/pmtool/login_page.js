import { HomePage } from "./home_page";
import { LostPasswordPage } from "./lost_password_page";
import { createCustomElement } from "../../helpers/custom_element";

export class LoginPage {
  constructor() {
    this.pmtoolUrl = "https://tredgate.com/pmtool/";
    this.usernameInput = createCustomElement("#username");
    this.passwordInput = "#password";
    this.loginButton = ".btn";
    this.lostPasswordAnchor = ".forget-password a";
    this.pageHeader = "h3.form-title";
    this.rememberMeCheckbox = ".checkbox";
    this.logoImg = ".login-page-logo";
    this.alertDiv = ".alert-danger";
  }

  openPmtool() {
    cy.visit(this.pmtoolUrl);
    return this;
  }

  typeUsername(username) {
    this.usernameInput.get().type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    return new HomePage();
  }

  clickLostPassword() {
    cy.get(this.lostPasswordAnchor).click();
    return new LostPasswordPage();
  }

  pageHeaderHasText(headerText) {
    cy.get(this.pageHeader).should("have.text", headerText);
    return this;
  }

  usernameHasPlaceholder(placeholderText) {
    this.usernameInput.hasPlaceholder(placeholderText);
    return this;
  }

  usernameIsVisible() {
    this.usernameInput.isVisible();
    return this;
  }

  usernameIsEditable(usernameValue) {
    this.usernameInput
      .get()
      .type(usernameValue)
      .should("have.value", usernameValue);
  }

  passwordHasPlaceholder(placeholderText) {
    cy.get(this.passwordInput).should(
      "have.attr",
      "placeholder",
      placeholderText
    );
    return this;
  }

  passwordIsVisible() {
    cy.get(this.passwordInput).should("be.visible");
    return this;
  }

  passwordIsEditable(passwordValue) {
    cy.get(this.passwordInput).should("be.enabled");
    cy.get(this.passwordInput)
      .type(passwordValue)
      .should("have.value", passwordValue);
  }

  rememberMeHasText(rememberMeText) {
    cy.get(this.rememberMeCheckbox).should("contain.text", rememberMeText);
    return this;
  }

  passwordForgottenHasText(passwordForgottenText) {
    cy.get(this.lostPasswordAnchor).should("have.text", passwordForgottenText);
    return this;
  }

  logoIsVisible() {
    cy.get(this.logoImg).should("be.visible");
    return this;
  }

  alertNotExist() {
    cy.get(this.alertNotExist).should("not.exist");
    return this;
  }
}
