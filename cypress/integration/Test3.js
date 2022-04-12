/// <reference types="Cypress"/>
import SignUp from './page objects/SignUp'
import NavigationPage from './page objects/NavigationPage'
import AdminPage from './page objects/AdminPage'

describe('Admin Test Suite', function() {
    before(function () {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data) {
            this.data = data
        })
    })
    it('Staff Test', function() {
        // instatiation of pages
        const signup = new SignUp()
        const navpage = new NavigationPage()
        const admin = new AdminPage()
        

        cy.visit('https://admin-stg.liveet.co/event-admin/auth/signin')
        signup.getEmailBox().type(this.data.email)
        signup.getPasswordBox().type(this.data.password)
        cy.get('.btn').click()
        cy.wait(5000)

        navpage.getAdminTab().click()

        //staff tab
        admin.getCreateStaff().click()
        // input fullname
        admin.getFullName().type(this.data.staffFullname)
        // Input isername
        admin.getUsername().type(this.data.staffUsername)
        // input email
        admin.getEmail().type(this.data.staffEmail)
        // input password
        admin.getPassword().type(this.data.staffPassword)
        admin.getOrganiserModule().click({force: true})
        admin.getEventConfigModule().click({force: true})
        admin.getEventPlanModule().click({force: true})
        admin.getEventConfigModule().click({force: true})
        admin.getPaymentModule().click({force: true})
        admin.getTurnstileModule().click({force: true})
        admin.getFaceVerificationModule().click({force: true})
        admin.getUserModule().click({force: true})
        admin.getActivityLogModule().click({force: true})
        admin.getReportModule().click({force: true})
        admin.getAdminModule().click({force: true})
    
        // click create button 
        admin.getCreateStaffButton().click({force: true})

        // update staff
        admin.getUpdateStaffProfile().click()
        // update username
        admin.getUsername().type(this.data.staffUsernameUpdate)
        // click update
        admin.getUpdateStaffButton().click({force: true})
        
        
    })

})