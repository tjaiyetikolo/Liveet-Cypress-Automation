class EventConfigPage {
    getPage() {
        return cy.get('.pcoded-main-container')
    }

    getCreateTicket() {
        return cy.get('#event_config-tabpane-ticketPlans > .row > .col-md-12 > .card > .card-body > [style="display: flex; justify-content: space-between; margin-bottom: 5px;"] > .btn-primary')
    }

    getTicketPlanName() {
        return cy.get('#ticketPlanName')
    }

    getMinimumPopulation() {
        return cy.get('#minPopulation')
    }

    getMaximumPopulation() {
        return cy.get('#maxPopulation')
    }

    getTotalCost() {
        return cy.get('#ticketCost')
    }

    getCreateTicketPlanButton() {
        return cy.get('.modal-footer > .btn-primary')
    }

    getTurnstileCostTab() {
        return cy.get('#event_config-tab-turnstileCost')
    }

    getCreateTurnstilePrice() {
        return cy.get('#event_config-tabpane-turnstileCost > .row > .col-md-12 > .card > .card-body > [style="display: flex; justify-content: space-between; margin-bottom: 5px;"] > .btn-primary')
    }

    getTurnstileCostBox() {
        return cy.get('#cost')
    }

    getCreateTurnstileButton() {
        return cy.get('.modal-footer > .btn-primary')
    }


    getTimelineBudleTab() {
        return cy.get('#event_config-tab-timelineBundle')
    }

    getCreateTimelineBundle() {
        return cy.get('#event_config-tabpane-timelineBundle > .row > .col-md-12 > .card > .card-body > [style="display: flex; justify-content: space-between; margin-bottom: 5px;"] > .btn-primary')
    }

    getBundleName() {
        return cy.get('#timelineBundleName')
    }

    getDurationYears() {
        return cy.get(':nth-child(3) > :nth-child(1) > .form-control')
    }

    getMonths() {
        return cy.get(':nth-child(2) > .form-control')
    }

    getDays() {
        return cy.get(':nth-child(3) > .form-control')
    }

    getBundleCost() {
        return cy.get('#bundleCost')
    }

    getCreateTimelineBundleButton() {
        return cy.get('.modal-footer > .btn-primary')
    }
}

export default EventConfigPage