import { CreateTasksModal } from "./create_tasks_modal";
import { HeaderSection } from "./header_section";

export class TasksPage extends HeaderSection {
  constructor() {
    super();
    this.addTaskButton = 'button[test_id="Add Task"]';
  }

  clickAddTask() {
    cy.get(this.addTaskButton).click();
    return new CreateTasksModal();
  }
}
