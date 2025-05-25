export class NavigationPage {
  static menuButton() {
    return cy.get("#menu-toggle");
  }

  static sidebar() {
    return cy.get("#sidebar-wrapper");
  }

  static historyLink() {
    return cy.contains("a", "History");
  }
}
