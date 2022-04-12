/// <reference types="Cypress"/>
import SignUp from './page objects/SignUp'
import NavigationPage from './page objects/NavigationPage'
import ReportPage from './page objects/ReportPage'

describe('Report Test Suite', function() {
    before(function () {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data) {
            this.data = data
        })
    })
    it('Report Test', function() {
        // instatiation of pages
        const signup = new SignUp()
        const navpage = new NavigationPage()
        const report = new ReportPage()
        

        cy.visit('https://admin-stg.liveet.co/event-admin/auth/signin')
        signup.getEmailBox().type(this.data.email)
        signup.getPasswordBox().type(this.data.password)
        cy.get('.btn').click()
        cy.wait(40000)

        navpage.getReportTab().click()

        // click organiser dropdown
        report.getOrganiser().type('Bui').wait(5000)
        report.getOrganiserResult().click()
        
        // cy.get('.col-md-12 > :nth-child(1) > .col > form > .row > :nth-child(1) > .css-b62m3t-container > [name="organizers"]').each(($e1, index, $list) => {
        //    if($e1.text() === "Built Foster")
        //    {
        //        cy.wrap($e1).click()
        //    } 
        // })

        report.getEvents().type('Alte').wait(5000)
        report.getEventResult().click()

        // cy.get('.col-md-12 > :nth-child(1) > .col > form > .row > :nth-child(2) > .css-b62m3t-container > [name="events"]').each(($e1, index, $list) => {
        //     if($e1.text() === "Alte")
        //     {
        //         cy.wrap($e1).click()
        //     } 
        //  })
        report.getFilterButton().click()


        // report charts
        
        
        
    })

})