export class AppointmentPage {
  static facilityDropdown() {
    return cy.get("#combo_facility");
  }

  static readmissionCheckbox() {
    return cy.get("#chk_hospotal_readmission");
  }

  static medicaidRadio() {
    return cy.get("#radio_program_medicaid");
  }

  static dateField() {
    return cy.get("#txt_visit_date");
  }

  static datePickerDay(day) {
    return cy.get(".datepicker-days td.day").contains(day);
  }

  static commentField() {
    return cy.get("#txt_comment");
  }

  static bookAppointmentButton() {
    return cy.get("#btn-book-appointment");
  }
}
