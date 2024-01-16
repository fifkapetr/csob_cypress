import { HeaderSection } from "./header_section";
import { NewProjectModal } from "./new_project_modal";
import { TasksPage } from "./tasks_page";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super();
    this.pageTitle = ".page-title";
    this.newProjectButton = 'button[test_id="Add Project"]';
    this.searchInput = 'input[test_id="search_input"]';
    this.searchButton = 'button[test_id="search_button"]';
    this.loaderDiv = ".data_listing_processing";
    this.projectsTable = ".table-wrapper";
    cy.get(this.pageTitle).should("contain.text", "Projects");
  }

  clickProjectName(projectName) {
    cy.get(this.projectsTable).within(() => {
      cy.contains(projectName).click();
    });
    return new TasksPage();
  }

  typeSearchInput(prompt) {
    cy.get(this.searchInput).clear().type(prompt);
    return this;
  }

  clickSearchButton() {
    cy.get(this.searchButton).click();
    cy.get(this.loaderDiv).should("not.exist");
    return this;
  }

  clickNewProject() {
    cy.get(this.newProjectButton).click();
    return new NewProjectModal();
  }
}
