/// <reference types="Cypress"/>
import SignUp from './page objects/SignUp'
import NavigationPage from './page objects/NavigationPage'
import OrganiserPage from './page objects/OrganiserPage'

describe('Organizer Test Suite', function() {

    before(function () {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data) {
            this.data = data
        })
    })
    it('Test case 1', function() {
        // instatiation of pages
        const signup = new SignUp()
        const navpage = new NavigationPage()
        const organiser = new OrganiserPage()

        cy.visit('https://admin-stg.liveet.co/event-admin/auth/signin')
        signup.getEmailBox().type(this.data.email)
        signup.getPasswordBox().type(this.data.password)
        cy.get('.btn').click()
        cy.wait(70000)

        // create organiser account
        navpage.getorganisertab().click() 
        // click add organiser button
        organiser.getAddOrganiser().click()
        // type organiser name
        organiser.getOrganiserName().type(this.data.organiserName)
        // type organiser email
        organiser.getOrganiserEmail().type(this.data.organiserEmail)
        // enter organiser phone number
        organiser.getOrganiserPhone().type(this.data.organiserPhone)
        // enter organiser address
        organiser.getOrganiserAddress().type(this.data.organiserAddress)
        // enter username
        organiser.getUsername().type(this.data.organiserUsername)
        // enter password
        organiser.getPassword().type(this.data.organiserPassword)
        // click button
        cy.contains('Create Organizer').click()


        // manage sub staff
        organiser.getViewStaff().click()
        // disable status
        organiser.getDisableStatus().click()
        // logout staff
        organiser.getLogoutButton().click()

        // update staff
        organiser.getBackButton().click()
        cy.wait(10000)
        organiser.getUpdateStaff().click()
        // enter username
        organiser.getUsername().clear().type(this.data.updatedUsername)
        // click update organiser
        organiser.getUpdateOrganiserButton().click()
        cy.wait(10000)
        // // logout staff
        organiser.getorganiserLogoutButton().click()        

    })
})