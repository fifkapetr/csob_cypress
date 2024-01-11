describe("Forms tests", () => {
  beforeEach(() => {
    cy.visit("https://tredgate.com/webtrain/registration.html");
  });

  it("Check radio button", () => {
    cy.get('input[name="subscription"]').check("basic");
  });

  it("Check 2 interests", () => {
    cy.get('input[name="interests[]"]').check("sports").should("be.checked");
    cy.get('input[name="interests[]"]').check("reading").should("be.checked");
    cy.get('input[name="interests[]"]').check(["music", "travel"]);
  });

  it("", () => {});
});
