describe("Api Display Tests", () => {
  it("Check Login APIs", () => {
    cy.visit("http://localhost:3001/");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('button[data-testid="log_in"]').click();
  });

  it("Basic Intercept and wait Test", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001/");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('button[data-testid="log_in"]').click();
    cy.wait("@login_api");
  });

  it.only("Login Api has POST request method", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001/");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('button[data-testid="log_in"]').click();
    cy.wait("@login_api").its("request.method").should("eq", "POST");
    cy.get("@login_api").its("response.statusCode").should("eq", 201);
  });
});
