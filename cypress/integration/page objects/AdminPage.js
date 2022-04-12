class AdminPage {
    getCreateStaff() {
        return cy.get('[style="display: flex; justify-content: flex-end; margin-bottom: 5px;"] > .btn')
    }

    getFullName() {
        return cy.get('#admin_fullname')
    }

    getUsername() {
        return cy.get('#admin_username')
    }

    getEmail() {
        return cy.get('#admin_email')
    }

    getPassword() {
        return cy.get('#admin_password')
    }

    getOrganiserModule() {
        return cy.get('#organiser')
    }
    getEventModule() {
        return cy.get('#event')
    }
    getEventPlanModule() {
        return cy.get('#admin_event_plan_transaction')
    }
    getEventConfigModule() {
        return cy.get('#admin_event_config')
    }
    getPaymentModule() {
        return cy.get('#payment')
    }
    getTurnstileModule() {
        return cy.get('#turnstile')
    }
    getFaceVerificationModule() {
        return cy.get('#face_verification_log')
    }
    getUserModule() {
        return cy.get('#user')
    }
    getActivityLogModule() {
        return cy.get('#activity_log')
    }
    getReportModule() {
        return cy.get('#report')
    }
    getAdminModule() {
        return cy.get('#admin')
    }
    getCreateStaffButton() {
        return cy.get('.col > .btn')
    }

    getUpdateStaffProfile() {
        return cy.get('[index="0"] > :nth-child(8) > .d-flex > .btn')
    }
    getUpdateStaffButton() {
        return cy.get('.col > .btn')
    }
}


export default AdminPage