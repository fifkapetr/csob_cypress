import { HomePage } from "./home_page";

export class NewProjectModal {
  constructor() {
    this.projectNameInput = 'div[data-testid="Name"] input';
    this.projectSaveButton = 'button[type="submit"]';
    this.prioritySelect = 'div[data-testid="Priority"] select';
    this.statusSelect = 'div[data-testid="Status"] select';
    this.attachmentInput =
      '.btn-upload input[type="file"][multiple="multiple"]';
  }

  typeProjectName(projectName) {
    cy.get(this.projectNameInput).type(projectName);
    return this;
  }

  selectPriority(priority) {
    cy.get(this.prioritySelect).select(priority);
    return this;
  }

  selectStatus(status) {
    cy.get(this.statusSelect).select(status);
    return this;
  }

  insertAttachment() {
    cy.log("Using @projectFile to insert attachments");
    cy.get(this.attachmentInput).selectFile("@projectFile");
    return this;
  }

  clickSave() {
    cy.get(this.projectSaveButton).click();
    // ! this is not correct page, change it to ProjectTasksPage after creating it
    return new HomePage();
  }
}
