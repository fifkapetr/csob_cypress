import { HomePage } from "../../page-objects/pmtool/home_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../page-objects/pmtool/projects_page";
import { faker } from "@faker-js/faker";

describe("Projects end 2 end tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .clickProjects();
  });
  it("Create project and check information", () => {
    const projectName = `FIFKA_self-exercise_${faker.number.int({
      min: 10000,
      max: 999999,
    })}`;
    const taskName = `FIFKA_TASK_${faker.number.int({
      min: 10000,
      max: 999999,
    })}`;
    cy.fixture("upload.txt", { encoding: null }).as("projectFile");
    const projectStatus = "Open";
    const authorName = "ČSOB Cypress";

    new ProjectsPage()
      .clickNewProject()
      .typeProjectName(projectName)
      .selectPriority("High")
      .selectStatus(projectStatus)
      .insertAttachment()
      .clickSave()
      .clickAddTask()
      .selectStatus("Open")
      .typeName(taskName)
      .selectType("Change")
      .clickSave()
      .clickProjects()
      .typeSearchInput(projectName)
      .clickSearchButton()
      .clickProjectName(projectName)
      .clickProjectInfo()
      .projectHasStatus(projectStatus)
      .createdByHasCorrectName(authorName)
      .projectTitleHasName(projectName)
      .clickProfile()
      .clickLogout();
  });
});
