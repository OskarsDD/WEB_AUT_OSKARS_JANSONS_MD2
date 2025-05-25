export class LoginPage {
  static usernameField() {
    return cy.get("#txt-username");
  }

  static passwordField() {
    return cy.get("#txt-password");
  }

  static loginButton() {
    return cy.get("#btn-login");
  }
}
