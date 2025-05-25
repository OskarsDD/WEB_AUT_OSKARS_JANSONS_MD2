import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { AppointmentPage } from "../pageObjects/AppointmentPage";
import { AppointmentSummaryPage } from "../pageObjects/AppointmentSummaryPage";
import { NavigationPage } from "../pageObjects/NavigationPage";

describe("CURA Appointment System", () => {
  beforeEach(() => {
    HomePage.visit();
  });
  context("Make Appointment Flow", () => {
    it("should allow user to successfully book an appointment with valid input", () => {
      HomePage.bookAppointmentButton().click();

      LoginPage.usernameField().type("John Doe");
      LoginPage.passwordField().type("ThisIsNotAPassword");
      LoginPage.loginButton().click();

      AppointmentPage.facilityDropdown().select("Seoul CURA Healthcare Center");
      AppointmentPage.readmissionCheckbox().check();
      AppointmentPage.medicaidRadio().check();
      AppointmentPage.dateField().click();
      AppointmentPage.datePickerDay("30").click();
      AppointmentPage.commentField().type("CURA Healthcare Service.");
      AppointmentPage.bookAppointmentButton().click();

      AppointmentSummaryPage.facilityResult().should(
        "contain",
        "Seoul CURA Healthcare Center"
      );
      AppointmentSummaryPage.readmissionResult().should("contain", "Yes");
      AppointmentSummaryPage.programResult().should("contain", "Medicaid");
      AppointmentSummaryPage.dateResult().should("contain", "30");
      AppointmentSummaryPage.commentResult().should(
        "contain",
        "CURA Healthcare Service."
      );
    });
  });
  context("Appointment History Check", () => {
    it("should show no appointment history after logging in with a demo account", () => {
      HomePage.bookAppointmentButton().click();

      LoginPage.usernameField().type("John Doe");
      LoginPage.passwordField().type("ThisIsNotAPassword");
      LoginPage.loginButton().click();

      NavigationPage.menuButton().click();
      NavigationPage.sidebar().should("have.class", "active");
      NavigationPage.historyLink().click();

      AppointmentSummaryPage.noAppointmentText().should("be.visible");
    });
  });
});
