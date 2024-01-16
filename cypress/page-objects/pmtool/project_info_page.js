import { HeaderSection } from "./header_section";

export class ProjectInfoPage extends HeaderSection {
  constructor(projectId = "") {
    super(`module=items/info&path=21-${projectId}`);
    this.projectNameDiv = ".project-info .portlet-title .caption";
    this.statusDiv = ".table-item-details .form-group-157 td>div";
    this.createdByDiv = ".table-item-details .form-group-155 td>span";
  }

  projectTitleHasName(projectName) {
    cy.get(this.projectNameDiv).should("contain.text", projectName);
    return this;
  }

  projectHasStatus(status) {
    cy.get(this.statusDiv).should("have.text", status);
    return this;
  }

  createdByHasCorrectName(authorName) {
    cy.get(this.createdByDiv).should("have.text", authorName);
    return this;
  }
}
