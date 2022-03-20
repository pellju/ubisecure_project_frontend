import cy from 'cypress'

describe('Train app testing:', function () {

    it('The frontend is accessible', function () {
        cy.visit('http://localhost:3000')
        cy.contains('Register')
        cy.contains('Login')
    })

    it('Registration is possible', function() {
        cy.visit('http://localhost:3000')
        cy.get('#RegUsername').type('cypresstester')
        cy.get('#Name').type('Tester')
        cy.get('#Email').type('tes@ter.net')
        cy.get('#RegPassword').type('123456')
        cy.get('#register-button').click()
        cy.contains('Registration done successfully')
    })

    it('Registration with false email outputs error', function () {
        cy.get('#RegUsername').type('cypresstester1')
        cy.get('#Name').type('Tester')
        cy.get('#Email').type('tester.net')
        cy.get('#RegPassword').type('123456')
        cy.get('#register-button').click()
        cy.contains('Length of username or password or name or email is invalid')
    })

    it('Registration using username or email which has already been used for registration gives error', function () {
        cy.get('#RegUsername').type('cypresstester')
        cy.get('#Name').type('Tester')
        cy.get('#Email').type('tes@ter.net')
        cy.get('#RegPassword').type('123456')
        cy.get('#register-button').click()
        cy.contains('Username or email already found, please use another one')
    })

    it('Using fake information to login yields an error', function () {
        cy.get('#LoginUsername').type('this username does not exist')
        cy.get('#LoginPassword').type('123456')
        cy.get('#login-button').click()
        cy.contains('Incorrect username or password')
    })

    it('Using incorrect password for login yields an error', function () {
        cy.get('#LoginUsername').type('cypresstester')
        cy.get('#LoginPassword').type('654321')
        cy.get('#login-button').click()
        cy.contains('Incorrect username or password')
    })

    it('After a successfull login, own data is shown', function () {
        cy.get('#LoginUsername').type('cypresstester')
        cy.get('#LoginPassword').type('123456')
        cy.get('#login-button').click()
        cy.contains('Username: cypresstester')
        cy.contains('Name: Tester')
        cy.contains('Email: tes@ter.net')
    })

    it('Adding a train should be seen in the site', function () {
        
        const testTrain = {
            name: 'Cypress test train',
            destination: '/dev/null',
            speed: 133.7,
            coordinates: [60.2019178, 24.9345118]
        }
        cy.request({method: 'PUT', url: 'http://localhost:3001/trains/550/location', body: testTrain})
        cy.contains(testTrain.name)
    })
})