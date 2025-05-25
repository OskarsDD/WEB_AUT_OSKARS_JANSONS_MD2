export class AppointmentSummaryPage {
  static facilityResult() {
    return cy.get("#facility");
  }

  static readmissionResult() {
    return cy.get("#hospital_readmission");
  }

  static programResult() {
    return cy.get("#program");
  }

  static dateResult() {
    return cy.get("#visit_date");
  }

  static commentResult() {
    return cy.get("#comment");
  }

  static noAppointmentText() {
    return cy.contains("No appointment");
  }
}
