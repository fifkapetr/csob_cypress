import { CreateTasksModal } from "./create_tasks_modal";
import { HeaderSection } from "./header_section";
import { ProjectInfoPage } from "./project_info_page";

export class TasksPage extends HeaderSection {
  constructor() {
    super();
    this.addTaskButton = 'button[test_id="Add Task"]';
    this.projectInfoAnchor = ".navbar-header .navbar-brand";
  }

  clickProjectInfo() {
    cy.get(this.projectInfoAnchor).click();
    return new ProjectInfoPage();
  }

  clickAddTask() {
    cy.get(this.addTaskButton).click();
    return new CreateTasksModal();
  }
}
