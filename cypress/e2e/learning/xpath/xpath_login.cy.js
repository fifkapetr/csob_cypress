describe("Login tests with XPath selectors", () => {
  it("Login with Xpath Selectors", () => {
    cy.visit("http://tredgate.com/pmtool");
    cy.xpath("//input[@id='username']").type("csob_cypress");
  });
});
