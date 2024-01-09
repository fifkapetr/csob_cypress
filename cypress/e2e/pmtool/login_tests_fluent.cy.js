import { HomePage } from "../../page-objects/pmtool/home_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Login and logout into Pmtool using Fluent API", () => {
    new LoginPage()
      .typeUsername("csob_cypress")
      .typePassword("Heslo1234")
      .clickLogin()
      .clickProfile()
      .clickLogout();
  });

  it("Open Lost Password and return to Login", () => {
    new LoginPage().clickLostPassword().clickBack();
  });
});
