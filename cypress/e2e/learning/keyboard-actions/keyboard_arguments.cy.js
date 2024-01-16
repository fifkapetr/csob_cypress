describe("Keyboard Arguments", () => {
  it("Confirm form by pressing enter key", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("csob_cypress");
    cy.get("#password").type("Heslo1234{enter}");
  });
});
