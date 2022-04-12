class OrganiserPage {
    getAddOrganiser() {
        return cy.contains('Add Organizer')
    }

    getOrganiserName() {
        return cy.get('#OrganizationName')
    }

    getOrganiserEmail() {
        return cy.get('#OrganizationEmail')
    }

    getOrganiserPhone() {
        return cy.get('#OrganizationPhone')
    }

    getOrganiserAddress() {
        return cy.get('#OrganizationAddress')
    }

    getUsername() {
        return cy.get('#OrganizationUsername')
    }

    getPassword() {
        return cy.get('#OrganizationPassword')
    }

    getViewStaff() {
        return cy.contains('View Staff')
    }

    getDisableStatus() {
        return cy.get('.d-flex > :nth-child(1)')
    }

    getLogoutButton() {
        return cy.get('.btn:nth-child(2)')
    }

    getBackButton() {
        return cy.get('#Capa_1')
    }

    getUpdateStaff() {
        return cy.get('[index="0"] > :nth-child(8) > .d-flex > :nth-child(2)')
    }

    getUpdateOrganiserButton() {
        return cy.get('.modal-footer > .btn-primary')
    }

    getorganiserLogoutButton() {
        return cy.get('[index="0"] > :nth-child(8) > .d-flex > :nth-child(3)')
    }

    getReportCharts() {
        return cy.get('#reportList-tab-reportCharts')
    }

    
}

export default OrganiserPage