describe("Debugging pmtool", () => {
  it("Debugging", () => {
    cy.visit("http://tredgate.com/pmtool");
    cy.get("#username").type("csob_cypress");
    cy.get("#password").type("Heslo1234");
    cy.get(".btn").pause().click();
  });
});

it("Alert test", () => {
  cy.visit("https://tegb-frontend-88542200c6db.herokuapp.com/register");
  cy.get('[data-testid="submit-button"]').click();
  cy.get('[data-testid="username-input"]').type("");
});
