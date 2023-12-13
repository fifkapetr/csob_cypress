import { fakerCS_CZ as faker } from "@faker-js/faker";

describe("Using faker", () => {
  it("Generate unique data with faker", () => {
    const fullName = faker.person.fullName();
    const email = faker.internet.exampleEmail();
    const randomInt = faker.number.int({ min: 100, max: 10000 });
    cy.log(randomInt);
    cy.log(fullName);
    cy.log(email);
  });
});
