import { LoginPage } from "../../page-objects/pmtool/login_page";
import { faker } from "@faker-js/faker";

describe("Create New Project Tests", () => {
  it("Create project with name and logout", () => {
    const projectName =
      "ProjectAutomation_" + faker.number.int({ min: 1000, max: 10000 });
    new LoginPage()
      .openPmtool()
      .typeUsername("csob_cypress")
      .typePassword("Heslo1234")
      .clickLogin()
      .clickProjects()
      .clickNewProject()
      .typeProjectName(projectName)
      .clickSave()
      .clickProfile()
      .clickLogout();
  });
});
