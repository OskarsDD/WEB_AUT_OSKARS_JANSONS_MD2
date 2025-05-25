import { BasePage } from "./basePage";
export class HomePage extends BasePage {
  static bookAppointmentButton() {
    return cy.get("#btn-make-appointment");
  }
}
