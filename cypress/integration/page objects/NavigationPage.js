class NavigationPage {
    getorganisertab() {
        return cy.get(':nth-child(3) > .nav-link')
    }

    getEventManagerTab() {
        return cy.get('a[href="/event-admin/event-manager"]')
    }

    getAdminTab() {
        return cy.get(':nth-child(13) > .nav-link')
    }

    getReportTab() {
        return cy.get(':nth-child(12) > .nav-link')
    }

    getEventConfigTab() {
        return cy.get(':nth-child(11) > .nav-link')
    }
}

export default NavigationPage