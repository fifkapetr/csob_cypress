import { HomePage } from "../../page-objects/pmtool/home_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Login and logout into Pmtool using Fluent API", () => {
    new LoginPage()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .clickProfile()
      .clickLogout();
  });

  it("Open Lost Password and return to Login", () => {
    new LoginPage().clickLostPassword().clickBack();
  });
});
