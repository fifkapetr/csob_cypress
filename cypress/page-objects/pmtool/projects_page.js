import { HeaderSection } from "./header_section";
import { NewProjectModal } from "./new_project_modal";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super();
    this.pageTitle = ".page-title";
    this.newProjectButton = 'button[test_id="Add Project"]';
    cy.get(this.pageTitle).should("contain.text", "Projects");
  }

  clickNewProject() {
    cy.get(this.newProjectButton).click();
    return new NewProjectModal();
  }
}
