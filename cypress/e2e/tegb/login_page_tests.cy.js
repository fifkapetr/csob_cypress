import { TegBLoginPage } from "../../page-objects/tegb/tegb_login_page";

describe("TegB login tests", () => {
  beforeEach(() => {
    new TegBLoginPage().openApplication();
  });
  it("Login user to app", () => {
    new TegBLoginPage()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin();
  });
});
