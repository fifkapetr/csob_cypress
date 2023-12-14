import { HomePage } from "./home_page";

export class NewProjectModal {
  constructor() {
    this.projectNameInput = 'div[data-testid="Name"] input';
    this.projectSaveButton = 'button[type="submit"]';
  }

  typeProjectName(projectName) {
    cy.get(this.projectNameInput).type(projectName);
    return this;
  }

  clickSave() {
    cy.get(this.projectSaveButton).click();
    // ! this is not correct page, change it to ProjectTasksPage after creating it
    return new HomePage();
  }
}
