class SignUp {
    getEmailBox() {
        return cy.get(':nth-child(3) > .form-control')
    }

    getPasswordBox() {
        return cy.get(':nth-child(5) > .form-control')
    }

}

export default SignUp
