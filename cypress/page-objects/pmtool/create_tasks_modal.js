import { TasksPage } from "./tasks_page";

export class CreateTasksModal {
  constructor() {
    this.typeSelect = 'div[data-testid="Type"] select';
    this.nameInput = 'div[data-testid="Name"] input';
    this.statusSelect = 'div[data-testid="Status"] select';
    this.saveButton = '[type="submit"]';
    this.usersListDiv = ".form-group-fieldtype_users";
  }

  selectType(type) {
    cy.get(this.typeSelect).select(type);
    return this;
  }

  selectStatus(status) {
    cy.get(this.statusSelect).select(status);
    return this;
  }

  typeName(name) {
    cy.get(this.nameInput).type(name);
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    return new TasksPage();
  }

  asignTaskByName(name) {
    cy.get(this.usersListDiv).within(() => {
      cy.contains(name).click();
    });
    return this;
  }
}
