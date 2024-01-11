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

  it("Check and uncheck checkbox", () => {
    cy.get('input[name="interests[]"]').check("sports");
    cy.get('input[name="interests[]"]').uncheck("sports");
    cy.get('input[name="interests[]"]').uncheck("sports");
  });

  it("Clean and fill name", () => {
    cy.get("#name").clear().type("Petr Fifka");
  });

  it("Select female gender", () => {
    cy.get("#gender").select("female");
    cy.get("#gender").select("Male");
  });

  it("Submit form", () => {
    cy.get("form").submit();
  });

  it("Upload file", () => {
    cy.fixture("upload.txt", { encoding: null }).as("uploadFile");
    cy.get("input[type='file']").selectFile("@uploadFile");
  });

  it("Type date", () => {
    cy.get("#datepicker").type("1989-11-04");
  });
});
