import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login Tests", () => {
  it("Login and logout into Pmtool using Fluent API", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("csob_cypress")
      .typePassword("Heslo1234")
      .clickLogin()
      .clickProfile()
      .clickLogout();
  });
});
