import { LoginPage } from "./login_page";
import { ProjectsPage } from "./projects_page";

export class HomePage {
  constructor() {
    this.profileDropdown = "#user_dropdown";
    this.logoutAnchor = "#logout";
    this.projectsLink = "#Projects";
    this.pageHeader = "#welcome-page-header";
    cy.get(this.pageHeader).should("be.visible");
  }

  clickProfile() {
    cy.get(this.profileDropdown).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutAnchor).click();
    return new LoginPage();
  }

  clickProjects() {
    cy.get(this.projectsLink).click();
    return new ProjectsPage();
  }
}
