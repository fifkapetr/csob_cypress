import { TasksPage } from "./tasks_page";

export class NewProjectModal {
  constructor() {
    this.projectNameInput = 'div[data-testid="Name"] input';
    this.projectSaveButton = 'button[type="submit"]';
    this.prioritySelect = 'div[data-testid="Priority"] select';
    this.statusSelect = 'div[data-testid="Status"] select';
    this.attachmentInput = "input[type='file'][data-msg-accept]";
    this.attachmentTable = ".attachments-form-list";
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
    cy.get(this.attachmentInput).selectFile("@projectFile", { force: true });
    cy.get(this.attachmentTable).should("be.visible");
    return this;
  }

  clickSave() {
    cy.get(this.projectSaveButton).click();
    return new TasksPage();
  }
}
