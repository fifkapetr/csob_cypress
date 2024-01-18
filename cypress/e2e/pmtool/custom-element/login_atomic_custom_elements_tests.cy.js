import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe(
  "Login Page atomic tests with custom elements",
  { testIsolation: false },
  () => {
    before(() => {
      new LoginPage().openPmtool();
    });

    it("Username is visible", () => {
      new LoginPage().usernameInput.isVisible();
    });
    it("Username has placeholder", () => {
      new LoginPage().usernameInput.hasPlaceholder("Username");
    });
    it("Username has value after type", () => {
      const user = "TEST1";
      new LoginPage().typeUsername(user).usernameInput.hasValue(user);
    });
  }
);
