import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login page tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Page header has text 'Login'", () => {
    new LoginPage().pageHeaderHasText("Login");
  });

  it("Username input has placeholder 'Username'", () => {
    new LoginPage().usernameHasPlaceholder("Username");
  });

  it("Password input has placeholder 'Password'", () => {
    new LoginPage().passwordHasPlaceholder("Password");
  });

  it("Remember me checkbox has text 'Remember Me'", () => {
    new LoginPage().rememberMeHasText("Remember Me");
  });

  it("Password forgotten has text 'Password forgotten?'", () => {
    new LoginPage().passwordForgottenHasText("Password forgotten?");
  });

  it("Application logo is visible", () => {
    new LoginPage().logoIsVisible();
  });

  it("Alert not exist after opening pmtool", () => {
    new LoginPage().alertNotExist();
  });
});
