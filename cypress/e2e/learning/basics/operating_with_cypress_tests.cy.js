describe("Operating with Cypress Tests", () => {
  it("Login Test", () => {
    cy.visit("http://tredgate.com/pmtool");
    cy.get("#username").type("csob_cypress");
    cy.get("#password").type("Heslo1234");
    cy.get('[type="submit"]').click();
  });
});
