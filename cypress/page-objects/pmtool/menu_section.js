export class MenuSection {
  constructor() {
    this.projectsMenuAnchor = "#Projects a";
    this.dashboardMenuAnchor = "#dashboard a";
    this.UsersMenuAnchor = "#Users > a.menu-itemsitems1";
  }

  clickProjects() {
    const { ProjectsPage } = require("./projects_page");
    cy.get(this.projectsMenuAnchor).click();
    return new ProjectsPage();
  }

  clickDashboard() {
    const { HomePage } = require("./home_page");
    cy.get(this.dashboardMenuAnchor).click();
    return new HomePage();
  }

  clickUsers() {
    const { UsersPage } = require("./users_page");
    cy.get(this.UsersMenuAnchor).click();
    return new UsersPage();
  }
}
