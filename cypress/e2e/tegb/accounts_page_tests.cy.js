import { TegBLoginPage } from "../../page-objects/tegb/tegb_login_page";

describe("TegB Accounts Tests", () => {
  beforeEach(() => {
    new TegBLoginPage().openApplication();
  });
  it("Open Accounts and check title test", () => {
    new TegBLoginPage()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin()
      .waitForLoginApi()
      .clickAccounts()
      .waitForAccountLoad()
      .pageTitle.hasText("Account");
  });
});
