/// <reference types="Cypress"/>
import SignUp from './page objects/SignUp'
import NavigationPage from './page objects/NavigationPage'
import EventConfigPage from './page objects/EventConfigPage'


describe('Event Config  Suite', function() {
    before(function () {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data) {
            this.data = data
        })
    })
    it('Ticket Plan Test', function() {
        // instatiation of pages
        const signup = new SignUp()
        const navpage = new NavigationPage()
        const config = new EventConfigPage()
       
        

        cy.visit('https://admin-stg.liveet.co/event-admin/auth/signin')
        signup.getEmailBox().type(this.data.email)
        signup.getPasswordBox().type(this.data.password)
        cy.get('.btn').click()
        cy.wait(40000)

        navpage.getEventConfigTab().click()
        
        config.getPage().click()
        config.getCreateTicket().click()
        config.getTicketPlanName().type(this.data.ticketPlan)
        config.getMinimumPopulation().type(this.data.minPop)
        config.getMaximumPopulation().type(this.data.maxPop)
        config.getTotalCost().type(this.data.totalCost)
        config.getCreateTicketPlanButton().click()

        // turnstile
        config.getTurnstileCostTab().click()
        config.getCreateTurnstilePrice().click()
        config.getTurnstileCostBox().type(this.data.turnstileCost)
        config.getCreateTurnstileButton().click()

        // timeline bundle
        config.getTimelineBudleTab().click()
        config.getCreateTimelineBundle().click()
        config.getBundleName().type(this.data.bundleName)
        config.getDurationYears().type(this.data.bundleYears)
        config.getMonths().type(this.data.bundleMonths)
        config.getDays().type(this.data.bundleDays)
        config.getBundleCost().type(this.data.bundleCost)
        config.getCreateTimelineBundleButton().click()
    })

})