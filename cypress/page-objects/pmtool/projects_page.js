import { NewProjectModal } from "./new_project_modal";

export class ProjectsPage {
  constructor() {
    this.newProjectButton = 'button[test_id="Add Project"]';
  }

  clickNewProject() {
    cy.get(this.newProjectButton).click();
    return new NewProjectModal();
  }
}
