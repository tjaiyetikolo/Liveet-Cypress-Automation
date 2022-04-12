/// <reference types="Cypress"/>
import SignUp from './page objects/SignUp'
import NavigationPage from './page objects/NavigationPage'
import EventPage from './page objects/EventPage'

describe('Event Manager Test Suite', function() {

    before(function () {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data) {
            this.data = data
        })
    })
    it('Event Testing Test', function() {
        // instatiation of pages
        const signup = new SignUp()
        const navpage = new NavigationPage()
        const event = new EventPage()

        cy.visit('https://admin-stg.liveet.co/event-admin/auth/signin')
        signup.getEmailBox().type(this.data.email)
        signup.getPasswordBox().type(this.data.password)
        cy.get('.btn').click()
        cy.wait(30000)
    
        // click on Event Manager
        navpage.getEventManagerTab().click()
        // click on create event
        event.getCreateEvent().click({force: true})
        cy.wait(10000)
        // clik on event organiser
        event.getEventOrganiserDropdown().select(this.data.organiserName)
        // clik event name
        event.getEventName().type(this.data.eventName)
        // click date
        event.getEventDate().type(this.data.eventDate)
        event.getEventPage().click()
        // clcik venue
        event.getVenueAddress().type(this.data.venue)
        // click event description
        event.getEventDescription().type(this.data.eventDesc)
        // click public event
        event.getPublicEvent().click({force: true})
        // click free payment
        event.getFreePayment().click({force: true})
        // click next
        event.getNextButton().click()


        // scroll to bottom
        cy.scrollTo('bottom')

        // enter ticket name
        event.getTicketName().type(this.data.ticketName)
        // enter ticket population 
        event.getTicketPopulation().type(this.data.ticketPop)
        // click next
        event.getTicketNextButton().click()
        cy.wait(5000)

        // enter turnstile
        event.getTurnstitle().type('1')
        // stop ticket sale
        event.getStopTicket().type(this.data.stopTicket)
        event.getPageWrapperTicket().click({force: true})
        // stop event
        event.getStopEvent().type(this.data.stopEvent)
        event.getPageWrapperTicket().click({force: true})

        // allow invitation 
        event.getAllowInvitation().click({force: true})
        // click transfer ticket
        event.getTransferTicket().click({force: true})
        // submit
        event.getSubmitButton().click()


        navpage.getEventManagerTab().click()
        cy.wait(1000)

        // // Ticket
        // event.getAlternativeTicket().click({force: true})
        // event.getCreateTicket().click()
        // event.getCreateTicketName().type(this.data.createTicketName)
        // event.getTicketCost().type(this.data.ticketCost)
        // event.getTicketDiscount().type(this.data.ticketDiscount)
        // event.getCreateTicketDescription().type(this.data.ticketDes)
        // event.getCreateTicketButton().click()

        
    })

})