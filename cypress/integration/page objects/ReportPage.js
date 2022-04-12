class ReportPage {
    getOrganiser() {
        return cy.get('.col-md-12 > :nth-child(1) > .col > form > .row > :nth-child(1) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql')
    }

    getEvents() {
        return cy.get('.col-md-12 > :nth-child(1) > .col > form > .row > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql')
    }

    getFilterButton() {
        return cy.get('.col-md-12 > :nth-child(1) > .col > form > .row > .col-lg-2 > .btn')
    }

    getOrganiserResult() {
        return cy.get('#react-select-2-option-33')
    }

    getEventResult() {
        return cy.get('#react-select-3-option-1')
    }

}

export default ReportPage