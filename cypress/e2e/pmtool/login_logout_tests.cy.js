import { HomePage } from "../../page-objects/pmtool/home_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login and Logout Tests", () => {
  it("Login to Pmtool", () => {
    const loginPage = new LoginPage();
    loginPage.openPmtool();
    loginPage.typeUsername("csob_cypress");
    loginPage.typePassword("Heslo1234");
    loginPage.clickLogin();
  });

  it("Login and Logout from Pmtool", () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();

    loginPage.openPmtool();
    loginPage.typeUsername("csob_cypress");
    loginPage.typePassword("Heslo1234");
    loginPage.clickLogin();
    homePage.clickProfile();
    homePage.clickLogout();
  });
});
