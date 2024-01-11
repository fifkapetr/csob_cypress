import { HomePage } from "../../../page-objects/pmtool/home_page";
import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Polymorphism tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername("csob_cypress")
      .typePassword("Heslo1234")
      .clickLogin();
  });

  it("Logout via polymorphism class", () => {
    new HomePage().clickProfile().clickLogout();
  });

  it("Open Projects and logout", () => {
    new HomePage().clickProjects().clickProfile().clickLogout();
  });

  it("Open Pages via Menu Section", () => {
    new HomePage().clickProjects().clickDashboard();
  });

  it.only("Open Projects, Dashboard, Users pages and logout", () => {
    new HomePage()
      .clickProjects()
      .clickDashboard()
      .clickUsers()
      .clickProfile()
      .clickLogout();
  });
});
