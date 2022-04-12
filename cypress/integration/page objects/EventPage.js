class EventPage {
    getEventPage() {
        return cy.get('.page-wrapper > :nth-child(1)')
    }
    getCreateEvent() {
        return cy.get('div.col a.btn:nth-child(1)')
    }

    getEventOrganiserDropdown() {
        return cy.get('#organiser_id')
    }

    getEventName() {
        return cy.get('#event_name')
    }

    getEventDate() {
        return cy.get('input[class=form-control]:nth-child(1)')
    }

    getVenueAddress() {
        return cy.get('#address')
    }

    getEventDescription() {
        return cy.get('#event_desc')
    }

    getPublicEvent() {
        return cy.get('#event_type')
    }

    getFreePayment() {
        return cy.get('#event_payment_type')
    }

    getNextButton() {
        return cy.get('.MuiButtonBase-root')
    }

    getTicketName() {
        return cy.get('input[name="tickets[0].ticket_name"]')
    }

    getTicketPopulation() {
        return cy.get('input[name="tickets[0].ticket_population"]')
    }

    getTicketNextButton() {
        return cy.get(':nth-child(2) > .MuiButtonBase-root')
    }

    getPageWrapperTicket() {
        return cy.get('.page-wrapper > :nth-child(1)')
    }

    getFreeDuration() {
        return cy.get(':nth-child(3) > .p-2')
    }

    getTurnstitle() {
        return cy.get('#cost')
    }

    getStopTicket() {
        return cy.get(':nth-child(3) > .rdt > .form-control')
    }

    getStopEvent() {
        return cy.get(':nth-child(4) > .rdt > .form-control')
    }

    getAllowInvitation() {
        return cy.get('#event_can_invite')
    }

    getTransferTicket() {
        return cy.get('#event_can_transfer_ticket')
    }

    getSubmitButton() {
        return cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiButton-label')
    }


    // Tickets
    getAlternativeTicket() {
        cy.contains('Alte').click({force: true})
        return cy.contains('TICKETS')
    }

    getCreateTicket() {
        return cy.get('.col > .btn')
    }

    getCreateTicketName() {
        return cy.get('#ticket_name')
    }

    getTicketCost() {
        return cy.get('#ticket_cost')
    }

    getTicketDiscount() {
        return cy.get('#ticket_discount')
    }

    getPopulation() {
        return cy.get('#ticket_population')
    }

    getCreateTicketDescription() {
        return cy.get('#ticket_desc')
    }

    getCreateTicketButton() {
        return cy.get('form > .btn')
    }

}

export default EventPage